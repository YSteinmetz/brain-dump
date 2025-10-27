import { App, Plugin, PluginSettingTab, Setting, TFile, moment, Notice } from 'obsidian';

interface BrainDumpSettings {
	notesFolder: string;
	templateContent: string;
	enableDailyNote: boolean;
	dailyNoteFolder: string;
	enableKasten: boolean;
	kastenFolder: string;
	autoUpdateKasten: boolean;
}

const DEFAULT_SETTINGS: BrainDumpSettings = {
	notesFolder: 'Notes',
	templateContent: `---
created: {{date}} {{time}}
tags: []
---

# {{title}}

## Content


## Tasks


---
Related Links: `,
	enableDailyNote: true,
	dailyNoteFolder: 'Daily Notes',
	enableKasten: true,
	kastenFolder: 'Kasten',
	autoUpdateKasten: true
};

export default class BrainDumpPlugin extends Plugin {
	settings: BrainDumpSettings;

	async onload() {
		await this.loadSettings();

		// Add ribbon icon (sidebar button)
		this.addRibbonIcon('brain-circuit', 'Create Brain Dump Note', () => {
			this.createBrainDumpNote();
		});

		// Add command (hotkey configured in Obsidian Settings → Hotkeys)
		this.addCommand({
			id: 'create-note',
			name: 'Create Note',
			callback: () => {
				this.createBrainDumpNote();
			}
		});

		// Add command to manually consolidate a kasten topic
		this.addCommand({
			id: 'consolidate-kasten',
			name: 'Consolidate Kasten Topic',
			callback: async () => {
				const topics = await this.getKastenTopics();
				if (topics.length === 0) {
					new Notice('No kasten topics found. Use tags like #kasten/topic-name');
					return;
				}
				
				// Consolidate all topics with notifications
				let successCount = 0;
				for (const topic of topics) {
					try {
						await this.consolidateKastenTopic(topic, false);
						successCount++;
					} catch (error) {
						console.error(`Error consolidating ${topic}:`, error);
					}
				}
				
				if (successCount > 0) {
					new Notice(`✅ ${successCount} kasten topic(s) consolidated!`);
				} else {
					new Notice(`❌ Error consolidating kasten topics`);
				}
			}
		});

		// Register event to update MOCs and Kasten when notes are modified
		this.registerEvent(
			this.app.vault.on('modify', (file) => {
				if (file instanceof TFile) {
					this.onModify(file);
				}
			})
		);

		// Add settings tab
		this.addSettingTab(new BrainDumpSettingTab(this.app, this));
	}

	async createBrainDumpNote() {
		const now = moment();
		const timestamp = now.format('YYYY-MM-DD HH-mm');
		const date = now.format('YYYY-MM-DD');
		const time = now.format('HH:mm');

		// Create Notes folder if it doesn't exist
		await this.ensureFolderExists(this.settings.notesFolder);

		// Generate note content from template
		const content = this.settings.templateContent
			.replace(/{{date}}/g, date)
			.replace(/{{time}}/g, time)
			.replace(/{{title}}/g, timestamp);

		// Create the note
		const filePath = `${this.settings.notesFolder}/${timestamp}.md`;
		
		try {
			const file = await this.app.vault.create(filePath, content);
			
			// Open the new note
			await this.app.workspace.getLeaf().openFile(file);
			
			// Update daily note if enabled
			if (this.settings.enableDailyNote) {
				await this.updateDailyNote(date, timestamp, file);
			}

			new Notice('✅ Brain dump note created!');
		} catch (error) {
			new Notice(`❌ Error creating note: ${error.message}`);
			console.error('Brain Dump error:', error);
		}
	}

	async updateDailyNote(date: string, timestamp: string, noteFile: TFile) {
		try {
			await this.ensureFolderExists(this.settings.dailyNoteFolder);
			
			const dailyNotePath = `${this.settings.dailyNoteFolder}/${date}.md`;
			let dailyNote = this.app.vault.getAbstractFileByPath(dailyNotePath);

			if (!dailyNote) {
				// Create daily note
				const dailyContent = `# ${date}\n\n## Brain Dumps\n- [[${timestamp}]]\n`;
				dailyNote = await this.app.vault.create(dailyNotePath, dailyContent);
			} else if (dailyNote instanceof TFile) {
				// Update existing daily note
				const content = await this.app.vault.read(dailyNote);
				
				if (content.includes('## Brain Dumps')) {
					// Add to existing section
					const updatedContent = content.replace(
						/(## Brain Dumps\n)/,
						`$1- [[${timestamp}]]\n`
					);
					await this.app.vault.modify(dailyNote, updatedContent);
				} else {
					// Add new section
					const updatedContent = content + `\n## Brain Dumps\n- [[${timestamp}]]\n`;
					await this.app.vault.modify(dailyNote, updatedContent);
				}
			}
		} catch (error) {
			console.error('Error updating daily note:', error);
		}
	}

	async ensureFolderExists(folderPath: string) {
		const folder = this.app.vault.getAbstractFileByPath(folderPath);
		if (!folder) {
			await this.app.vault.createFolder(folderPath);
		}
	}

	// Register event to watch for tags in notes and update Kasten
	async onModify(file: TFile) {
		if (!file.path.startsWith(this.settings.notesFolder)) return;

		const content = await this.app.vault.read(file);

		// Update Kasten consolidations (silently, without notifications)
		if (this.settings.enableKasten && this.settings.autoUpdateKasten) {
			const kastenTags = this.extractKastenTags(content);
			for (const kastenTag of kastenTags) {
				await this.consolidateKastenTopic(kastenTag, false);
			}
		}
	}

	// Extract kasten tags from content (#kasten/topic-name)
	extractKastenTags(content: string): string[] {
		const kastenRegex = /#kasten\/([\w-]+)/g;
		const matches = content.matchAll(kastenRegex);
		const topics = new Set<string>();
		
		for (const match of matches) {
			topics.add(match[1]);
		}
		
		return Array.from(topics);
	}

	// Get all kasten topics from all notes
	async getKastenTopics(): Promise<string[]> {
		const topics = new Set<string>();
		const files = this.app.vault.getMarkdownFiles();
		
		for (const file of files) {
			if (file.path.startsWith(this.settings.notesFolder)) {
				const content = await this.app.vault.read(file);
				const fileTags = this.extractKastenTags(content);
				fileTags.forEach(tag => topics.add(tag));
			}
		}
		
		return Array.from(topics);
	}

	// Consolidate all notes with a specific kasten topic
	async consolidateKastenTopic(topic: string, showNotice: boolean = false) {
		try {
			await this.ensureFolderExists(this.settings.kastenFolder);
			
			const kastenPath = `${this.settings.kastenFolder}/${topic}.md`;
			
			// Get all notes with this kasten tag
			const notes = await this.getNotesWithKastenTag(topic);
			
			if (notes.length === 0) {
				if (showNotice) {
					new Notice(`⚠️ No notes found with #kasten/${topic}`);
				}
				return;
			}

			// Group notes by section (extracted from content)
			const sections = await this.organizeNotesBySections(notes, topic);
			
			// Generate consolidated content
			let consolidatedContent = `# ${topic}\n\n`;			
			consolidatedContent += `> Automatic note consolidation - ${notes.length} notes\n`;
			consolidatedContent += `> Last updated: ${moment().format('YYYY-MM-DD HH:mm')}\n\n`;
			consolidatedContent += `---\n\n`;
			
			// Add sections
			for (const [sectionName, sectionNotes] of Object.entries(sections)) {
				consolidatedContent += `## ${sectionName}\n\n`;
				
				for (const note of sectionNotes) {
					const noteContent = await this.app.vault.read(note.file);
					const cleanContent = this.extractNoteContent(noteContent);
					
					consolidatedContent += `### [[${note.file.basename}]] - ${note.created}\n\n`;
					consolidatedContent += cleanContent + '\n\n';
					consolidatedContent += `---\n\n`;
				}
			}
			
			// Create or update kasten file
			const existingFile = this.app.vault.getAbstractFileByPath(kastenPath);
			
			if (existingFile instanceof TFile) {
				await this.app.vault.modify(existingFile, consolidatedContent);
				if (showNotice) {
					new Notice(`✅ Kasten "${topic}" updated! (${notes.length} notes)`);
				}
			} else {
				await this.app.vault.create(kastenPath, consolidatedContent);
				if (showNotice) {
					new Notice(`✅ Kasten "${topic}" created! (${notes.length} notes)`);
				}
			}
			
		} catch (error) {
			console.error('Error consolidating kasten:', error);
			if (showNotice) {
				new Notice(`❌ Error consolidating kasten "${topic}": ${error.message}`);
			}
		}
	}

	// Get all notes with specific kasten tag
	async getNotesWithKastenTag(topic: string): Promise<{file: TFile, created: string}[]> {
		const notes: {file: TFile, created: string}[] = [];
		const files = this.app.vault.getMarkdownFiles();
		
		for (const file of files) {
			if (file.path.startsWith(this.settings.notesFolder)) {
				const content = await this.app.vault.read(file);
				if (content.includes(`#kasten/${topic}`)) {
					// Extract created date from frontmatter
					const createdMatch = content.match(/created:\s*(.+)/);
					const created = createdMatch ? createdMatch[1].trim() : 'Unknown';
					notes.push({file, created});
				}
			}
		}
		
		// Sort by created date (oldest first)
		notes.sort((a, b) => a.created.localeCompare(b.created));
		
		return notes;
	}

	// Organize notes by sections based on headers in content
	async organizeNotesBySections(notes: {file: TFile, created: string}[], topic: string): Promise<{[key: string]: {file: TFile, created: string}[]}> {
		const sections: {[key: string]: {file: TFile, created: string}[]} = {
			'Geral': []
		};
		
		for (const note of notes) {
			const content = await this.app.vault.read(note.file);
			
			// Try to find a section header (## Section Name)
			const sectionMatch = content.match(/^##\s+(.+)$/m);
			
			if (sectionMatch && sectionMatch[1] !== 'Content' && sectionMatch[1] !== 'Tasks') {
				const sectionName = sectionMatch[1].trim();
				if (!sections[sectionName]) {
					sections[sectionName] = [];
				}
				sections[sectionName].push(note);
			} else {
				sections['Geral'].push(note);
			}
		}
		
		// Remove empty sections
		for (const key in sections) {
			if (sections[key].length === 0) {
				delete sections[key];
			}
		}
		
		return sections;
	}

	// Extract main content from note (remove frontmatter, tasks section)
	extractNoteContent(content: string): string {
		// Remove frontmatter
		let cleaned = content.replace(/^---\n[\s\S]*?\n---\n/, '');
		
		// Remove title (first # heading)
		cleaned = cleaned.replace(/^#\s+.+\n/, '');
		
		// Get content up to Tasks section or end
		const tasksIndex = cleaned.indexOf('## Tasks');
		if (tasksIndex !== -1) {
			cleaned = cleaned.substring(0, tasksIndex);
		}
		
		// Remove "Links relacionados" section
		const linksIndex = cleaned.indexOf('---\nLinks relacionados:');
		if (linksIndex !== -1) {
			cleaned = cleaned.substring(0, linksIndex);
		}
		
		// Trim
		cleaned = cleaned.trim();
		
		return cleaned;
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

class BrainDumpSettingTab extends PluginSettingTab {
	plugin: BrainDumpPlugin;

	constructor(app: App, plugin: BrainDumpPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		containerEl.createEl('h2', {text: 'Brain Dump Settings'});

		new Setting(containerEl)
			.setName('Notes folder')
			.setDesc('Folder where brain dump notes will be created')
			.addText(text => text
				.setPlaceholder('Notes')
				.setValue(this.plugin.settings.notesFolder)
				.onChange(async (value) => {
					this.plugin.settings.notesFolder = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName('Enable Daily Notes')
			.setDesc('Automatically link brain dumps to daily notes')
			.addToggle(toggle => toggle
				.setValue(this.plugin.settings.enableDailyNote)
				.onChange(async (value) => {
					this.plugin.settings.enableDailyNote = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName('Daily Notes folder')
			.setDesc('Folder where daily notes will be created')
			.addText(text => text
				.setPlaceholder('Daily Notes')
				.setValue(this.plugin.settings.dailyNoteFolder)
				.onChange(async (value) => {
					this.plugin.settings.dailyNoteFolder = value;
					await this.plugin.saveSettings();
				}));

		containerEl.createEl('h3', {text: 'Kasten (Consolidation)'});

		new Setting(containerEl)
			.setName('Enable Kasten Consolidation')
			.setDesc('Automatically consolidate notes with #kasten/topic tags into organized documents')
			.addToggle(toggle => toggle
				.setValue(this.plugin.settings.enableKasten)
				.onChange(async (value) => {
					this.plugin.settings.enableKasten = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName('Kasten folder')
			.setDesc('Folder where consolidated kasten notes will be created')
			.addText(text => text
				.setPlaceholder('Kasten')
				.setValue(this.plugin.settings.kastenFolder)
				.onChange(async (value) => {
					this.plugin.settings.kastenFolder = value;
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName('Auto-update Kasten')
			.setDesc('Automatically update consolidated notes when you modify a note with kasten tags')
			.addToggle(toggle => toggle
				.setValue(this.plugin.settings.autoUpdateKasten)
				.onChange(async (value) => {
					this.plugin.settings.autoUpdateKasten = value;
					await this.plugin.saveSettings();
				}));

		containerEl.createEl('h3', {text: 'Keyboard Shortcut'});
		
		containerEl.createEl('p', {
			text: 'To configure the keyboard shortcut, go to: Settings → Hotkeys → Search for "Brain Dump"',
			cls: 'setting-item-description'
		});

		containerEl.createEl('h3', {text: 'Template'});

		new Setting(containerEl)
			.setName('Note template')
			.setDesc('Template for new brain dump notes. Available variables: {{date}}, {{time}}, {{title}}')
			.addTextArea(text => {
				text
					.setPlaceholder('Enter template...')
					.setValue(this.plugin.settings.templateContent)
					.onChange(async (value) => {
						this.plugin.settings.templateContent = value;
						await this.plugin.saveSettings();
					});
				text.inputEl.rows = 15;
				text.inputEl.cols = 50;
			});		
		
	}
}
