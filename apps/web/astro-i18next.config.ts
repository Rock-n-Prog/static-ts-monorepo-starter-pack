/** @type {import('astro-i18next').AstroI18nextConfig} */
const config = {
  defaultLocale: 'en',
  locales: ['en', 'fr'],
  namespaces: ['common', 'home', 'about', 'posts'],
  defaultNamespace: 'common',
  i18nextServer: {
    debug: true,
  },
};

export default config;
