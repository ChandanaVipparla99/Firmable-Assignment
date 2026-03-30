# Firmable Landing Blocks — WordPress Gutenberg Plugin

Five custom Gutenberg blocks that build the full Firmable landing page directly inside the WordPress block editor.

---

## Blocks included

| Block | Category | Editable Fields |
|---|---|---|
| **Firmable Hero** | Hero section | Badge, Headline, Gradient text, Subheadline, 2 CTA buttons |
| **Firmable Logos Strip** | Social proof | Label text |
| **Firmable Features Grid** | Features | Section label, Headline, Subheadline |
| **Firmable Testimonials** | Testimonials | Headline, Subheadline |
| **Firmable CTA Section** | Call to action | Badge, Headline, Subheadline, 2 CTA buttons, Footnote |

---

## Requirements

- WordPress 6.2+
- PHP 8.0+
- Node.js 18+ (to build the plugin)

---

## How to build & install

### Step 1 — Build the plugin

```bash
# In this directory:
npm install
npm run build
```

This compiles all blocks into the `build/` folder.

### Step 2 — Upload to WordPress

1. Zip the entire `firmable-landing-blocks` folder (including `build/`).
2. In WordPress admin go to **Plugins → Add New → Upload Plugin**.
3. Upload the zip and click **Install Now**, then **Activate**.

### Step 3 — Use the blocks

Open any page or post in the Gutenberg editor, click the **+** block inserter, and search for:
- `Firmable Hero`
- `Firmable Logos Strip`
- `Firmable Features Grid`
- `Firmable Testimonials`
- `Firmable CTA Section`

Add them in order for the full landing page layout.

---

## Development (live reload)

```bash
npm run start
```

This watches for changes and rebuilds automatically. Pair with a local WordPress install (e.g. Local by Flywheel, MAMP, or wp-env).

---

## Customisation tips

- **Text content** — Click any text inside a block in the editor; it's directly editable (RichText).
- **Button URLs** — Select a block and use the right-hand **Block** panel to set button URLs.
- **Colours / cards** — Feature cards, testimonials, and logo company data are defined in the block `index.js` source files and can be edited before building.
- **Fonts** — Add `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');` to your theme's CSS for the Inter font.

---

## File structure

```
firmable-landing-blocks/
├── firmable-landing-blocks.php   ← WordPress plugin entry file
├── package.json                  ← @wordpress/scripts build setup
├── README.md
├── src/
│   ├── hero/
│   │   ├── block.json            ← Block metadata & attributes
│   │   ├── index.js              ← edit() + save() functions
│   │   └── style.css             ← Frontend styles
│   ├── logos/       (same structure)
│   ├── features/    (same structure)
│   ├── testimonials/(same structure)
│   └── cta/         (same structure)
└── build/                        ← Generated after `npm run build`
```
