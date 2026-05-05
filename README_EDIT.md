# How to Edit Your Website

This guide explains how you can easily update the content of your website in the future.

### 1. Changing Text
All text is located in the `index.html` file.
- Open `index.html` in any text editor (like Notepad, VS Code, or even TextEdit).
- Use `Ctrl + F` (or `Cmd + F`) to find the text you want to change.
- Edit the text between the HTML tags (e.g., `<h1>Headline Here</h1>`).
- Save the file and refresh your browser.

### 2. Updating Photos
Photos are stored in the `Assest/` and `images/` folders.
- **To replace a photo**: Upload a new photo with the **exact same name** to the folder, replacing the old one.
- **To add a new project**:
    1. Upload the photo to the `Assest/` folder.
    2. Open `index.html` and find the `<div class="gallery-grid">` section.
    3. Copy an existing `<div class="gallery-item">` block and change the `src` attribute to your new image name.

### 3. Changing Your Phone Number or WhatsApp
Search for `260973316286` in `index.html` and replace it with your new number. Make sure to keep the country code (e.g., `260`) for the WhatsApp link.

### 4. Updating Services
Find the `<div class="services-grid">` section in `index.html`. You can edit the service titles, descriptions, and icons (using Lucide icon names).

### 5. Managing the Contact Form
The contact form currently simulates a submission for design purposes. To make it functional (send real emails), you would need to use a service like **Formspree** or a backend script. I can help you set this up if needed!

---
**Tip**: Always keep a backup copy of your `index.html` and `style.css` before making large changes!
