# Brain Dump - Obsidian Plugin

<!-- Language Toggle Menu -->
**📖 Language / Idioma / Sprache / 语言:**
- [🇺🇸 English](#english-version)
- [🇩🇪 Deutsch](#deutsche-version)
- [🇪🇸 Español](#versión-en-español)
- [🇨🇳 中文](#中文版本)
- [🇧🇷 Português](#versão-em-português)

---

## English Version

A quick note capture Obsidian plugin with automatic organization.

# Notice

Whenever I mention Kasten, I'm referring to the Zettelkasten note organization system. I use just "Kasten" to keep it shorter.

## 🎯 Features

- **Quick Capture**: Configurable shortcut to create notes instantly
- **Timestamped**: Notes created with `YYYY-MM-DD HH-mm.md` format
- **Automatic Template**: Pre-defined and customizable tags and sections in settings
- **Daily Notes**: Automatic links in daily notes
- **Automatic MOC**: Indexes created by tags automatically
- **Kasten (Consolidation)**: Automatically consolidates notes by topic using `#kasten/topic`
- **Tasks Integration**: Complete support for tasks
- **Sidebar Button**: 🧠 icon for quick access
- **Fully Configurable**: Customize everything via Settings

## 📦 Installation

### Via Community Plugins (Recommended)

1. Open Obsidian Settings
2. Go to Community Plugins → Browse
3. Search for "Brain Dump"
4. Click Install
5. Enable the plugin

### Manual Installation

1. Download the latest release from [GitHub](https://github.com/YSteinmetz/brain-dump/releases)
2. Extract files to `.obsidian/plugins/brain-dump/` in your vault
3. Reload Obsidian
4. Enable the plugin in Settings → Community Plugins

## ⚙️ Configuration

Access settings at: **Settings → Brain Dump**

### Available Options

- **Notes folder**: Folder where notes will be created (default: `Notes`)
- **Enable Daily Notes**: Enable/disable daily notes integration
- **Daily Notes folder**: Daily notes folder (default: `Daily Notes`)
- **Enable MOC**: Enable/disable automatic index creation
- **MOC folder**: Folder where indexes will be created (default: `MOC`)
- **Enable Kasten Consolidation**: Enable/disable automatic knowledge consolidation
- **Kasten folder**: Folder where consolidated notes will be created (default: `Kasten`)
- **Auto-update Kasten**: Automatically update when modifying notes
- **Note template**: Customize note template

### Configure Keyboard Shortcut

To configure or customize the shortcut:

1. Go to **Settings → Hotkeys**
2. Search for **"Brain Dump"** or **"Create Brain Dump Note"**
3. Click the **+** next to the command
4. Press the desired key combination (e.g., `Ctrl+Alt`)
5. Done!

> 💡 **Tip**: If `Ctrl+Alt` is already in use, try `Alt+B`, `Ctrl+Shift+D`, or any other free combination.

### Default Template

```markdown
---
created: {{date}} {{time}}
tags: []
---

# {{title}}

## Content


## Tasks
- [ ] 

---
Related links: 
```

### Template Variables

- `{{date}}`: Current date (YYYY-MM-DD)
- `{{time}}`: Current time (HH:mm)
- `{{title}}`: Note timestamp (YYYY-MM-DD HH-mm)

## 🚀 How to Use

### Create a Quick Note

**Option 1: Sidebar Button 🧠**
   - Click the brain icon in the left sidebar

**Option 2: Keyboard Shortcut**
   - Configure in Settings → Hotkeys → "Create Brain Dump Note"
   - Suggestion: `Ctrl+Alt` or `Ctrl+Shift+D`

**Option 3: Command Palette**
   - Press `Ctrl+P`
   - Type "Brain Dump"
   - Select "Create Brain Dump Note"

### Automatic Organization

- Add tags in `#tag` format in the note body
- Use `#kasten/topic` for automatic knowledge consolidation
- The plugin will automatically create:
  - MOC index files in `MOC/_INDEX - tag.md`
  - Consolidated Kasten notes in `Kasten/topic.md`

> 💡 **Kasten**: Use `#kasten/javascript` to consolidate all your notes about a specific theme into a single organized document!

### Review

- Use Obsidian search to find content
- Check your Daily Notes to see all notes from the day
- Access MOC indexes to see notes by category
- Consult Kasten files for consolidated knowledge review

## 🛠️ Development

### Setup

```bash
# Clone repository
git clone https://github.com/YSteinmetz/brain-dump
cd brain-dump

# Install dependencies
npm install

# Development with hot reload
npm run dev

# Build for production
npm run build
```

### Project Structure

```
.
├── main.ts              # Main plugin code
├── manifest.json        # Plugin manifest
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── esbuild.config.mjs   # Build configuration
└── versions.json        # Supported versions
```

## 💡 Suggested Workflow

1. **Capture**: Use Brain Dump whenever you need to quickly note something
2. **Tags**: Add relevant tags (#kasten/work, #kasten/study, #project, etc.)
3. **Review**: 
   - Check Daily Notes for chronological view
   - Use MOC indexes for thematic view
   - Access Kasten files for consolidated knowledge

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs via [Issues](https://github.com/YSteinmetz/brain-dump/issues)
- Suggest new features
- Submit pull requests

## ☕ Support

If you find this plugin helpful and want to support its development, you can buy me a coffee!

[![Buy Me A Coffee](https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png)](https://buymeacoffee.com/ysteinmetz)

Your support helps keep this project active and enables new features. Thank you! 🙏

## 📄 License

MIT

---

## Deutsche Version

Ein Obsidian-Plugin für schnelle Notizerfassung mit automatischer Organisation.

# Hinweis

Wann immer ich Kasten erwähne, beziehe ich mich auf das Zettelkasten-Notizorganisationssystem. Ich verwende nur "Kasten", um es kürzer zu halten.

## 🎯 Funktionen

- **Schnelle Erfassung**: Konfigurierbarer Tastenkürzel zum sofortigen Erstellen von Notizen
- **Zeitstempel**: Notizen im Format `YYYY-MM-DD HH-mm.md` erstellt
- **Automatische Vorlage**: Vordefinierte und anpassbare Tags und Abschnitte in den Einstellungen
- **Tägliche Notizen**: Automatische Links in täglichen Notizen
- **Automatisches MOC**: Indizes werden automatisch nach Tags erstellt
- **Kasten (Konsolidierung)**: Konsolidiert automatisch Notizen nach Thema mit `#kasten/thema`
- **Tasks-Integration**: Vollständige Unterstützung für Aufgaben
- **Seitenleisten-Button**: 🧠 Symbol für schnellen Zugriff
- **Vollständig konfigurierbar**: Alles über Einstellungen anpassbar

## 📦 Installation

### Über Community Plugins (Empfohlen)

1. Öffne Obsidian Einstellungen
2. Gehe zu Community Plugins → Browse
3. Suche nach "Brain Dump"
4. Klicke auf Install
5. Aktiviere das Plugin

### Manuelle Installation

1. Lade die neueste Version von [GitHub](https://github.com/YSteinmetz/brain-dump/releases) herunter
2. Extrahiere die Dateien nach `.obsidian/plugins/brain-dump/` in deinem Vault
3. Lade Obsidian neu
4. Aktiviere das Plugin unter Einstellungen → Community Plugins

## ⚙️ Konfiguration

Zugriff auf Einstellungen unter: **Einstellungen → Brain Dump**

### Verfügbare Optionen

- **Notes folder**: Ordner, in dem Notizen erstellt werden (Standard: `Notes`)
- **Enable Daily Notes**: Integration mit täglichen Notizen aktivieren/deaktivieren
- **Daily Notes folder**: Ordner für tägliche Notizen (Standard: `Daily Notes`)
- **Enable MOC**: Automatische Indexerstellung aktivieren/deaktivieren
- **MOC folder**: Ordner, in dem Indizes erstellt werden (Standard: `MOC`)
- **Enable Kasten Consolidation**: Automatische Wissenskonsolidierung aktivieren/deaktivieren
- **Kasten folder**: Ordner, in dem konsolidierte Notizen erstellt werden (Standard: `Kasten`)
- **Auto-update Kasten**: Automatisch aktualisieren beim Ändern von Notizen
- **Note template**: Notizvorlage anpassen

### Tastenkürzel konfigurieren

Um das Tastenkürzel zu konfigurieren oder anzupassen:

1. Gehe zu **Einstellungen → Hotkeys**
2. Suche nach **"Brain Dump"** oder **"Create Brain Dump Note"**
3. Klicke auf das **+** neben dem Befehl
4. Drücke die gewünschte Tastenkombination (z.B. `Ctrl+Alt`)
5. Fertig!

> 💡 **Tipp**: Falls `Ctrl+Alt` bereits verwendet wird, versuche `Alt+B`, `Ctrl+Shift+D` oder eine andere freie Kombination.

### Standard-Vorlage

```markdown
---
created: {{date}} {{time}}
tags: []
---

# {{title}}

## Inhalt


## Aufgaben
- [ ] 

---
Verwandte Links: 
```

### Vorlagen-Variablen

- `{{date}}`: Aktuelles Datum (YYYY-MM-DD)
- `{{time}}`: Aktuelle Zeit (HH:mm)
- `{{title}}`: Notiz-Zeitstempel (YYYY-MM-DD HH-mm)

## 🚀 Verwendung

### Schnelle Notiz erstellen

**Option 1: Seitenleisten-Button 🧠**
   - Klicke auf das Gehirn-Symbol in der linken Seitenleiste

**Option 2: Tastenkürzel**
   - Konfiguriere unter Einstellungen → Hotkeys → "Create Brain Dump Note"
   - Vorschlag: `Ctrl+Alt` oder `Ctrl+Shift+D`

**Option 3: Befehlspalette**
   - Drücke `Ctrl+P`
   - Tippe "Brain Dump"
   - Wähle "Create Brain Dump Note"

### Automatische Organisation

- Füge Tags im Format `#tag` im Notiztext hinzu
- Verwende `#kasten/thema` für automatische Wissenskonsolidierung
- Das Plugin erstellt automatisch:
  - MOC-Indexdateien in `MOC/_INDEX - tag.md`
  - Konsolidierte Kasten-Notizen in `Kasten/thema.md`

> 💡 **Kasten**: Verwende `#kasten/javascript`, um alle deine Notizen zu einem bestimmten Thema in einem einzigen organisierten Dokument zu konsolidieren!

### Überprüfung

- Verwende die Obsidian-Suche, um Inhalte zu finden
- Überprüfe deine täglichen Notizen, um alle Notizen des Tages zu sehen
- Greife auf MOC-Indizes zu, um Notizen nach Kategorie zu sehen
- Konsultiere Kasten-Dateien für konsolidierte Wissensüberprüfung

## 🛠️ Entwicklung

### Setup

```bash
# Repository klonen
git clone https://github.com/YSteinmetz/brain-dump
cd brain-dump

# Abhängigkeiten installieren
npm install

# Entwicklung mit Hot Reload
npm run dev

# Build für Produktion
npm run build
```

### Projektstruktur

```
.
├── main.ts              # Haupt-Plugin-Code
├── manifest.json        # Plugin-Manifest
├── package.json         # Abhängigkeiten und Skripte
├── tsconfig.json        # TypeScript-Konfiguration
├── esbuild.config.mjs   # Build-Konfiguration
└── versions.json        # Unterstützte Versionen
```

## 💡 Empfohlener Workflow

1. **Erfassen**: Verwende Brain Dump, wann immer du schnell etwas notieren musst
2. **Tags**: Füge relevante Tags hinzu (#kasten/arbeit, #kasten/studium, #projekt, etc.)
3. **Überprüfung**: 
   - Überprüfe tägliche Notizen für chronologische Sicht
   - Verwende MOC-Indizes für thematische Sicht
   - Greife auf Kasten-Dateien für konsolidiertes Wissen zu

## 🤝 Mitwirken

Beiträge sind willkommen! Zögere nicht:
- Bugs über [Issues](https://github.com/YSteinmetz/brain-dump/issues) zu melden
- Neue Funktionen vorzuschlagen
- Pull Requests zu senden

## ☕ Unterstützung

Wenn du dieses Plugin hilfreich findest und die Entwicklung unterstützen möchtest, kannst du mir einen Kaffee kaufen!

[![Buy Me A Coffee](https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png)](https://buymeacoffee.com/ysteinmetz)

Deine Unterstützung hilft dabei, dieses Projekt aktiv zu halten und neue Funktionen zu ermöglichen. Vielen Dank! 🙏

## 📄 Lizenz

MIT

---

## Versión en Español

Plugin para Obsidian que permite captura rápida de notas con organización automática.

# Aviso

Cada vez que mencione Kasten me refiero al sistema de organización de notas Zettelkasten. Uso solo Kasten para mantenerlo más corto.

## 🎯 Características

- **Captura Rápida**: Atajo configurable para crear notas instantáneamente
- **Con Marca de Tiempo**: Notas creadas con formato `YYYY-MM-DD HH-mm.md`
- **Plantilla Automática**: Etiquetas y secciones predefinidas y personalizables en configuraciones
- **Notas Diarias**: Enlaces automáticos en notas diarias
- **MOC Automático**: Índices creados por etiquetas automáticamente
- **Kasten (Consolidación)**: Consolida automáticamente notas por tema usando `#kasten/tema`
- **Integración de Tareas**: Soporte completo para tareas
- **Botón Lateral**: Icono 🧠 para acceso rápido
- **Totalmente Configurable**: Personaliza todo a través de Configuraciones

## 📦 Instalación

### A través de Community Plugins (Recomendado)

1. Abre Configuraciones de Obsidian
2. Ve a Community Plugins → Browse
3. Busca "Brain Dump"
4. Haz clic en Install
5. Activa el plugin

### Instalación Manual

1. Descarga la última versión desde [GitHub](https://github.com/YSteinmetz/brain-dump/releases)
2. Extrae los archivos a `.obsidian/plugins/brain-dump/` en tu vault
3. Recarga Obsidian
4. Activa el plugin en Configuraciones → Community Plugins

## ⚙️ Configuración

Accede a configuraciones en: **Configuraciones → Brain Dump**

### Opciones Disponibles

- **Notes folder**: Carpeta donde se crearán las notas (predeterminado: `Notes`)
- **Enable Daily Notes**: Activar/desactivar integración con notas diarias
- **Daily Notes folder**: Carpeta de notas diarias (predeterminado: `Daily Notes`)
- **Enable MOC**: Activar/desactivar creación automática de índices
- **MOC folder**: Carpeta donde se crearán los índices (predeterminado: `MOC`)
- **Enable Kasten Consolidation**: Activar/desactivar consolidación automática de conocimiento
- **Kasten folder**: Carpeta donde se crearán las notas consolidadas (predeterminado: `Kasten`)
- **Auto-update Kasten**: Actualizar automáticamente al modificar notas
- **Note template**: Personalizar plantilla de notas

### Configurar Atajo de Teclado

Para configurar o personalizar el atajo:

1. Ve a **Configuraciones → Hotkeys**
2. Busca **"Brain Dump"** o **"Create Brain Dump Note"**
3. Haz clic en el **+** junto al comando
4. Presiona la combinación de teclas deseada (ej: `Ctrl+Alt`)
5. ¡Listo!

> 💡 **Consejo**: Si `Ctrl+Alt` ya está en uso, prueba `Alt+B`, `Ctrl+Shift+D` o cualquier otra combinación libre.

### Plantilla Predeterminada

```markdown
---
created: {{date}} {{time}}
tags: []
---

# {{title}}

## Contenido


## Tareas
- [ ] 

---
Enlaces relacionados: 
```

### Variables de Plantilla

- `{{date}}`: Fecha actual (YYYY-MM-DD)
- `{{time}}`: Hora actual (HH:mm)
- `{{title}}`: Marca de tiempo de la nota (YYYY-MM-DD HH-mm)

## 🚀 Cómo Usar

### Crear una Nota Rápida

**Opción 1: Botón de Barra Lateral 🧠**
   - Haz clic en el icono del cerebro en la barra lateral izquierda

**Opción 2: Atajo de Teclado**
   - Configura en Configuraciones → Hotkeys → "Create Brain Dump Note"
   - Sugerencia: `Ctrl+Alt` o `Ctrl+Shift+D`

**Opción 3: Paleta de Comandos**
   - Presiona `Ctrl+P`
   - Escribe "Brain Dump"
   - Selecciona "Create Brain Dump Note"

### Organización Automática

- Añade etiquetas en formato `#etiqueta` en el cuerpo de la nota
- Usa `#kasten/tema` para consolidación automática de conocimiento
- El plugin creará automáticamente:
  - Archivos índice MOC en `MOC/_INDEX - etiqueta.md`
  - Notas Kasten consolidadas en `Kasten/tema.md`

> 💡 **Kasten**: ¡Usa `#kasten/javascript` para consolidar todas tus notas sobre un tema específico en un solo documento organizado!

### Revisión

- Usa la búsqueda de Obsidian para encontrar contenido
- Revisa tus Notas Diarias para ver todas las notas del día
- Accede a índices MOC para ver notas por categoría
- Consulta archivos Kasten para revisión consolidada de conocimiento

## 🛠️ Desarrollo

### Configuración

```bash
# Clonar repositorio
git clone https://github.com/YSteinmetz/brain-dump
cd brain-dump

# Instalar dependencias
npm install

# Desarrollo con recarga automática
npm run dev

# Build para producción
npm run build
```

### Estructura del Proyecto

```
.
├── main.ts              # Código principal del plugin
├── manifest.json        # Manifiesto del plugin
├── package.json         # Dependencias y scripts
├── tsconfig.json        # Configuración de TypeScript
├── esbuild.config.mjs   # Configuración de build
└── versions.json        # Versiones soportadas
```

## 💡 Flujo de Trabajo Sugerido

1. **Capturar**: Usa Brain Dump siempre que necesites anotar algo rápidamente
2. **Etiquetas**: Añade etiquetas relevantes (#kasten/trabajo, #kasten/estudio, #proyecto, etc.)
3. **Revisar**: 
   - Revisa Notas Diarias para vista cronológica
   - Usa índices MOC para vista temática
   - Accede a archivos Kasten para conocimiento consolidado

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Siéntete libre de:
- Reportar bugs a través de [Issues](https://github.com/YSteinmetz/brain-dump/issues)
- Sugerir nuevas características
- Enviar pull requests

## ☕ Apoyo

Si encuentras este plugin útil y quieres apoyar su desarrollo, ¡puedes invitarme un café!

[![Buy Me A Coffee](https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png)](https://buymeacoffee.com/ysteinmetz)

Tu apoyo ayuda a mantener este proyecto activo y permite nuevas características. ¡Gracias! 🙏

## 📄 Licencia

MIT

---

## 中文版本

Obsidian 快速笔记捕获插件，具有自动组织功能。

# 说明

每当我提到 Kasten 时，我指的是 Zettelkasten 笔记组织系统。我只使用 Kasten 来保持简短。

## 🎯 功能特性

- **快速捕获**: 可配置快捷键即时创建笔记
- **时间戳**: 以 `YYYY-MM-DD HH-mm.md` 格式创建笔记
- **自动模板**: 在设置中预定义和可自定义的标签和部分
- **每日笔记**: 每日笔记中的自动链接
- **自动 MOC**: 按标签自动创建索引
- **Kasten（整合）**: 使用 `#kasten/主题` 自动按主题整合笔记
- **任务集成**: 完整的任务支持
- **侧边栏按钮**: 🧠 图标快速访问
- **完全可配置**: 通过设置自定义所有内容

## 📦 安装

### 通过社区插件（推荐）

1. 打开 Obsidian 设置
2. 转到 Community Plugins → Browse
3. 搜索 "Brain Dump"
4. 点击 Install
5. 启用插件

### 手动安装

1. 从 [GitHub](https://github.com/YSteinmetz/brain-dump/releases) 下载最新版本
2. 将文件解压到你的 vault 中的 `.obsidian/plugins/brain-dump/`
3. 重新加载 Obsidian
4. 在设置 → Community Plugins 中启用插件

## ⚙️ 配置

在以下位置访问设置：**设置 → Brain Dump**

### 可用选项

- **Notes folder**: 创建笔记的文件夹（默认：`Notes`）
- **Enable Daily Notes**: 启用/禁用每日笔记集成
- **Daily Notes folder**: 每日笔记文件夹（默认：`Daily Notes`）
- **Enable MOC**: 启用/禁用自动索引创建
- **MOC folder**: 创建索引的文件夹（默认：`MOC`）
- **Enable Kasten Consolidation**: 启用/禁用自动知识整合
- **Kasten folder**: 创建整合笔记的文件夹（默认：`Kasten`）
- **Auto-update Kasten**: 修改笔记时自动更新
- **Note template**: 自定义笔记模板

### 配置键盘快捷键

要配置或自定义快捷键：

1. 转到 **设置 → Hotkeys**
2. 搜索 **"Brain Dump"** 或 **"Create Brain Dump Note"**
3. 点击命令旁边的 **+**
4. 按下所需的按键组合（例如：`Ctrl+Alt`）
5. 完成！

> 💡 **提示**: 如果 `Ctrl+Alt` 已被使用，请尝试 `Alt+B`、`Ctrl+Shift+D` 或任何其他空闲组合。

### 默认模板

```markdown
---
created: {{date}} {{time}}
tags: []
---

# {{title}}

## 内容


## 任务
- [ ] 

---
相关链接: 
```

### 模板变量

- `{{date}}`: 当前日期（YYYY-MM-DD）
- `{{time}}`: 当前时间（HH:mm）
- `{{title}}`: 笔记时间戳（YYYY-MM-DD HH-mm）

## 🚀 如何使用

### 创建快速笔记

**选项 1: 侧边栏按钮 🧠**
   - 点击左侧边栏中的大脑图标

**选项 2: 键盘快捷键**
   - 在设置 → Hotkeys → "Create Brain Dump Note" 中配置
   - 建议：`Ctrl+Alt` 或 `Ctrl+Shift+D`

**选项 3: 命令面板**
   - 按 `Ctrl+P`
   - 输入 "Brain Dump"
   - 选择 "Create Brain Dump Note"

### 自动组织

- 在笔记正文中添加 `#标签` 格式的标签
- 使用 `#kasten/主题` 进行自动知识整合
- 插件将自动创建：
  - `MOC/_INDEX - 标签.md` 中的 MOC 索引文件
  - `Kasten/主题.md` 中的整合 Kasten 笔记

> 💡 **Kasten**: 使用 `#kasten/javascript` 将所有关于特定主题的笔记整合到一个有组织的文档中！

### 审查

- 使用 Obsidian 搜索查找内容
- 检查你的每日笔记以查看当天的所有笔记
- 访问 MOC 索引按类别查看笔记
- 查阅 Kasten 文件进行整合知识审查

## 🛠️ 开发

### 设置

```bash
# 克隆仓库
git clone https://github.com/YSteinmetz/brain-dump
cd brain-dump

# 安装依赖
npm install

# 开发模式热重载
npm run dev

# 生产构建
npm run build
```

### 项目结构

```
.
├── main.ts              # 主插件代码
├── manifest.json        # 插件清单
├── package.json         # 依赖和脚本
├── tsconfig.json        # TypeScript 配置
├── esbuild.config.mjs   # 构建配置
└── versions.json        # 支持的版本
```

## 💡 建议的工作流程

1. **捕获**: 每当需要快速记录时使用 Brain Dump
2. **标签**: 添加相关标签（#kasten/工作、#kasten/学习、#项目等）
3. **审查**: 
   - 检查每日笔记以获得时间顺序视图
   - 使用 MOC 索引获得主题视图
   - 访问 Kasten 文件获得整合知识

## 🤝 贡献

欢迎贡献！请随时：
- 通过 [Issues](https://github.com/YSteinmetz/brain-dump/issues) 报告错误
- 建议新功能
- 提交 pull requests

## ☕ 支持

如果你觉得这个插件有用并想支持开发，可以请我喝杯咖啡！

[![Buy Me A Coffee](https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png)](https://buymeacoffee.com/ysteinmetz)

你的支持有助于保持这个项目的活跃并实现新功能。谢谢！🙏

## 📄 许可证

MIT

---

## Versão em Português

Plugin para Obsidian que permite captura rápida de notas com organização automática.

# Aviso

Toda vez que dizer Kasten estou me referindo ao sistema de organizações de notas Zettelkasten, uso somente Kasten para ficar mais curto.

## 🎯 Funcionalidades

- **Captura Rápida**: Atalho configurável para criar notas instantaneamente
- **Timestamped**: Notas criadas com formato `YYYY-MM-DD HH-mm.md`
- **Template Automático**: Tags e seções pré-definidas e personalizáveis nas configurações
- **Daily Notes**: Links automáticos nas notas diárias
- **MOC Automático**: Índices criados por tags automaticamente
- **Kasten (Consolidação)**: Consolida automaticamente notas por tópico usando `#kasten/topico`
- **Tasks Integration**: Suporte completo para tasks
- **Botão Lateral**: Ícone 🧠 para acesso rápido
- **Totalmente Configurável**: Personalize tudo via Settings

## 📦 Instalação

### Via Community Plugins (Recomendado)

1. Abra Obsidian Settings
2. Vá para Community Plugins → Browse
3. Busque por "Brain Dump"
4. Clique em Install
5. Ative o plugin

### Manual

1. Baixe a última release do [GitHub](https://github.com/YSteinmetz/brain-dump/releases)
2. Extraia os arquivos para `.obsidian/plugins/brain-dump/` no seu vault
3. Recarregue o Obsidian
4. Ative o plugin em Settings → Community Plugins

## ⚙️ Configuração

Acesse as configurações em: **Settings → Brain Dump**

### Opções Disponíveis

- **Notes folder**: Pasta onde as notas serão criadas (padrão: `Notes`)
- **Enable Daily Notes**: Ativar/desativar integração com notas diárias
- **Daily Notes folder**: Pasta das notas diárias (padrão: `Daily Notes`)
- **Enable MOC**: Ativar/desativar criação automática de índices
- **MOC folder**: Pasta onde os índices serão criados (padrão: `MOC`)
- **Enable Kasten Consolidation**: Ativar/desativar consolidação automática de conhecimento
- **Kasten folder**: Pasta onde as notas consolidadas serão criadas (padrão: `Kasten`)
- **Auto-update Kasten**: Atualizar automaticamente ao modificar notas
- **Note template**: Personalize o template das notas

### Configurar Atalho de Teclado

Para configurar ou personalizar o atalho:

1. Vá em **Settings → Hotkeys**
2. Busque por **"Brain Dump"** ou **"Create Brain Dump Note"**
3. Clique no **+** ao lado do comando
4. Pressione a combinação de teclas desejada (ex: `Ctrl+Alt`)
5. Pronto!

> 💡 **Dica**: Se `Ctrl+Alt` já estiver em uso, tente `Alt+B`, `Ctrl+Shift+D` ou qualquer outra combinação livre.

### Template Padrão

```markdown
---
created: {{date}} {{time}}
tags: []
---

# {{title}}

## Conteúdo


## Tasks
- [ ] 

---
Links relacionados: 
```

### Variáveis do Template

- `{{date}}`: Data atual (YYYY-MM-DD)
- `{{time}}`: Hora atual (HH:mm)
- `{{title}}`: Timestamp da nota (YYYY-MM-DD HH-mm)

## 🚀 Como Usar

### Criar uma Nota Rápida

**Opção 1: Botão na Barra Lateral 🧠**
   - Clique no ícone do cérebro na barra lateral esquerda

**Opção 2: Atalho de Teclado**
   - Configure em Settings → Hotkeys → "Create Brain Dump Note"
   - Sugestão: `Ctrl+Alt` ou `Ctrl+Shift+D`

**Opção 3: Command Palette**
   - Pressione `Ctrl+P`
   - Digite "Brain Dump"
   - Selecione "Create Brain Dump Note"

### Organização Automática

- Adicione tags no formato `#tag` no corpo da nota
- Use `#kasten/topico` para consolidação automática de conhecimento
- O plugin criará automaticamente:
  - Arquivos índice MOC em `MOC/_INDEX - tag.md`
  - Notas consolidadas Kasten em `Kasten/topico.md`

> 💡 **Kasten**: Use `#kasten/javascript` para consolidar todas suas notas sobre um tema específico em um único documento organizado!

### Revisão

- Use a busca do Obsidian para encontrar conteúdo
- Verifique suas Daily Notes para ver todas as notas do dia
- Acesse os índices MOC para ver notas por categoria
- Consulte arquivos Kasten para revisão consolidada de conhecimento

## 🛠️ Desenvolvimento

### Setup

```bash
# Clone o repositório
git clone https://github.com/YSteinmetz/brain-dump
cd brain-dump

# Instale dependências
npm install

# Desenvolvimento com hot reload
npm run dev

# Build para produção
npm run build
```

### Estrutura do Projeto

```
.
├── main.ts              # Código principal do plugin
├── manifest.json        # Manifesto do plugin
├── package.json         # Dependências e scripts
├── tsconfig.json        # Configuração TypeScript
├── esbuild.config.mjs   # Configuração do build
└── versions.json        # Versões suportadas
```

## 💡 Workflow Sugerido

1. **Captura**: Use o Brain Dump sempre que precisar anotar algo rapidamente
2. **Tags**: Adicione tags relevantes (#kasten/trabalho, #kasten/estudo, #projeto, etc.)
3. **Revisão**: 
   - Consulte Daily Notes para visão cronológica
   - Use índices MOC para visão por tema
   - Acesse arquivos Kasten para conhecimento consolidado

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se livre para:
- Reportar bugs via [Issues](https://github.com/YSteinmetz/brain-dump/issues)
- Sugerir novas funcionalidades
- Enviar pull requests

## ☕ Apoio

Se este plugin te ajuda e você quer apoiar seu desenvolvimento, pode me pagar um café!

[![Buy Me A Coffee](https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png)](https://buymeacoffee.com/ysteinmetz)

Seu apoio ajuda a manter este projeto ativo e permite novas funcionalidades. Obrigado! 🙏

## 📄 Licença

MIT

---

**Brain Dump** - Não deixe que o peso de não saber onde anotar te deixei de fazer. Anote do seu jeito, nós organizamos.
