// TODO: Translate rest of app
// TODO: Generation should be watched when using pnpm dev
/** @type {import('astro-i18next').AstroI18nextConfig} */
const config = {
  defaultLocale: 'en',
  locales: ['en', 'fr'],
  namespaces: ['common'],
  // TODO: Generate localized paths (doesn't work with path params)
  i18nextServer: {
    // TODO: Only in dev
    debug: true,
  },
};

export default config;
