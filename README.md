# IteraNovaWebPage

A static website for IteraNova - an IT solutions and software development company.

## Features

- **Multilingual Support**: Full website available in English, German, and Slovenian
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations and transitions
- **Sections**:
  - Hero section with call-to-action
  - About section describing the company
  - Services showcase with 6 service offerings
  - Contact section with contact information and form
  - Fixed navigation bar with language switcher

## Languages

- **English**: `/` (index.astro)
- **German**: `/de` (de.astro)
- **Slovenian**: `/sl` (sl.astro)

## Viewing the Website

To view the website locally:

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   Then open http://localhost:4321 in your browser

## Building for Production

To build the website for production:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Files

- `src/pages/index.astro` - English version of the website
- `src/pages/de.astro` - German version of the website
- `src/pages/sl.astro` - Slovenian version of the website
- `src/components/` - Reusable Astro components
- `src/layouts/` - Layout components
- `astro.config.mjs` - Astro configuration
- `tailwind.config.mjs` - Tailwind CSS configuration
- `.gitignore` - Git ignore file for development artifacts

## Technologies

- Astro - Modern static site generator
- Tailwind CSS - Utility-first CSS framework
- TypeScript - Type-safe JavaScript
