// If changed, remove from .gitignore for initial commit, then add again.
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.itera-nova.com',
  integrations: [tailwind(), sitemap()],
});