Perfect, Chandana — since you already have a **combined README** for your repo, let’s now prepare a **shorter, reviewer‑friendly `DOCUMENTATION.md`**. This version is step‑by‑step, with clear instructions and screenshot placeholders, so reviewers can follow along easily without digging into technical details.

---

```markdown
# Firmable Assignment – Documentation

## 1. Overview
The Firmable Assignment includes:
- A custom WordPress theme (`firmable-theme`)
- A companion Gutenberg plugin (`firmable-landing-blocks`)

Together, they demonstrate palette‑driven colors, reusable block patterns, responsive navigation, and reviewer‑friendly block development.

---

## 2. Installation

### Theme
1. Download or clone the repository:
   ```bash
   git clone https://github.com/ChandanaVipparla99/Firmable-Assignment.git
   ```
2. Copy the `firmable-theme` folder into your WordPress `wp-content/themes/` directory.
3. In WordPress admin → Appearance → Themes → Activate **Firmable Theme**.

📸 *Screenshot Placeholder: WordPress Themes page with Firmable Theme activated*

---

### Plugin
1. Navigate into the `firmable-landing-blocks` folder.
2. Build the plugin:
   ```bash
   npm install
   npm run build
   ```
3. Zip the entire `firmable-landing-blocks` folder (including `build/`).
4. In WordPress admin → Plugins → Add New → Upload Plugin.
5. Upload the zip, click **Install Now**, then **Activate**.

📸 *Screenshot Placeholder: WordPress Plugins page with Firmable Landing Blocks activated*

---

## 3. Using Block Patterns (Theme)
- Open the WordPress editor → click the **Block Inserter (+)**.  
- Switch to the **Patterns tab**.  
- Select one of the custom patterns (homepage layout, styled buttons).  
- Insert into your page and customize text/images.  

📸 *Screenshot Placeholder: Gutenberg editor showing Firmable block patterns*

---

## 4. Using Custom Blocks (Plugin)
- In the editor, search for:
  - Firmable Hero
  - Firmable Logos Strip
  - Firmable Features Grid
  - Firmable Testimonials
  - Firmable CTA Section
- Add them in order to build the full landing page.

📸 *Screenshot Placeholder: Gutenberg editor with Firmable Hero block inserted*

---

## 5. Editor Settings
- **Colors**: Controlled via `theme.json` palette.  
- **Typography**: Adjust font sizes/styles in the right sidebar.  
- **Block Variations**: Buttons and navigation blocks include primary/secondary styles.  

📸 *Screenshot Placeholder: Editor sidebar showing color palette options*

---

## 6. Navigation
- Desktop: Inline menu in header.  
- Mobile: Collapsible toggle menu (handled by `navigation.js`).  

📸 *Screenshot Placeholder: Mobile view with navigation toggle open*

---

## 7. Project Structure
```
firmable-theme/
firmable-landing-blocks/
```
📸 *Screenshot Placeholder: File explorer showing theme + plugin folders*

---

## 8. Live Demo:  
👉 blissful-sunset.localsite.io

📸 *Screenshot Placeholder: Browser showing live site homepage*

---

## 9. Author
Developed by **Chandana Vipparla**  
Focused on clean, scalable, and reviewer‑friendly WordPress theme + plugin development.
```