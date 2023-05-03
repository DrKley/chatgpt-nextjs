import { NextI18n } from './next-i18n';

export const languages = {
  zh: { name: '简体中文' },
  en: { name: 'English' },
  es: { name: 'Espanol' }
};

export const supportedLanguages = Object.keys(languages);
export const fallbackLng = 'en';

const i18n = new NextI18n({
  supportedLanguages,
  fallbackLng
});

supportedLanguages.forEach((locale) => {
  i18n.set(locale, require(`./${locale}/common.json`));
});

export default i18n;

export { i18n };
export { I18nProvider } from './provider';
export { useI18n } from '../hook/useI18n';
