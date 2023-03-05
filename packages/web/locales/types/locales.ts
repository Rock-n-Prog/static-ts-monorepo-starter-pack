const locales = ['en', 'fr'] as const;
type Locale = (typeof locales)[number];

const defaultLocale = 'en';

type WithLocale<T = unknown> = T & Readonly<{ locale: Locale }>;

export type { Locale, WithLocale };
export { locales, defaultLocale };
