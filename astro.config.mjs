// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://gsdolidze-svg.github.io',
  base: '/tomadesk-landing/',
  integrations: [tailwind()],
});
