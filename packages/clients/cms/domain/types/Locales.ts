const Locales = {
    En: 'en',
    Fr: 'fr',
} as const;

type Locale = typeof Locales[keyof typeof Locales];

export type { Locale };
export { Locales };