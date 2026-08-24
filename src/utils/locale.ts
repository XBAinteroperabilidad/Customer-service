// Languages that have a dedicated luxon/PrimeReact calendar locale registered (see App.tsx `addLocale`).
const CALENDAR_LOCALES = ['et', 'es'];

// Maps an i18next language code to the locale key used by timeago.js (see src/locale/*.ts).
const TIMEAGO_LOCALES: Record<string, string> = {
  et: 'et_EE',
  es: 'es_AR',
};

// Resolves the language used for luxon `DateTime.setLocale` and PrimeReact's `Calendar` `locale` prop,
// falling back to English (PrimeReact/luxon's built-in default) for languages without a dedicated locale.
export const resolveCalendarLocale = (language: string): string => (CALENDAR_LOCALES.includes(language) ? language : 'en');

// Resolves the locale key used by timeago.js, falling back to its built-in `en_US` locale.
export const resolveTimeagoLocale = (language: string): string => TIMEAGO_LOCALES[language] ?? 'en_US';
