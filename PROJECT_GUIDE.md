
# FuelMails Project Roadmap

This guide helps you navigate the custom structure of your FuelMails application.

## 🖼️ How to use your own images

To replace the placeholders with your own images, follow these two steps:

### 1. Place your files in the sidebar
Upload your images to the following folders in the sidebar (or your local `public/images/` folder):
- **Logo:** `public/images/logo.png`
- **Templates:** `public/images/templates/` (e.g., `template-1.png`, `template-2.png`, etc.)
- **Blog Images:** `public/images/blog/` (e.g., `blog-1.png`, `blog-2.png`, etc.)
- **Team/Founder Photos:** `public/images/anish.jpg`, `public/images/bishalya.jpg`
- **Case Studies:** `public/images/case-studies/` (e.g., `banner-1.png`, `email-1.png`)

### 2. Update the Image Map
Open `src/app/lib/placeholder-images.json` and ensure the `url` matches your filename. 
- Example: If your logo is named `my-new-logo.svg`, change `"logo": "/images/logo.png"` to `"logo": "/images/my-new-logo.svg"`.

## 📂 Key Directories

### 🧩 Core Components
- **`src/components/layout/navbar.tsx`**: Main navigation with persistent theme toggle and mobile-optimized menus.
- **`src/components/hero-section.tsx`**: High-impact centered hero titles (optimized for mobile to prevent overflow).
- **`src/components/calendly-section.tsx`**: Booking widget with precise scroll-targeting using `scroll-mt`.

### 📝 Content & Data
- **`src/lib/data.ts`**: The central file for all text content, services list, and team data.
- **`src/app/lib/placeholder-images.json`**: The central mapping for all image assets used across the app.

## ⚙️ Development Tips
- **Scroll Alignment:** We use `scroll-mt-20` and specific ID anchors to ensure the "Book Audit" clicks land exactly on the Calendly widget.
- **Mobile Menu:** The "Services" menu is interactive and reveals sub-pages when tapped.
- **Performance:** Navigation is optimized for production. Use `npm run build` locally to see the true lightning-fast speed of the App Router.
