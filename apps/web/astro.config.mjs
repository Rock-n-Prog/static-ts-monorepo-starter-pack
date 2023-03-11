import { defineConfig } from 'astro/config';
import astroI18next from 'astro-i18next';

const config = defineConfig({
  integrations: [astroI18next()],
});

export default config;
