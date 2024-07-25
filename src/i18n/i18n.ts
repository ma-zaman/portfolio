import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { fr, en } from '@translations'

const resources = {
    fr: {
        translation: fr
    },
    en: {
        translation: en
    }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false
    }
  });


export default i18n;