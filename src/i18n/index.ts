import i18n from 'i18next'
import { useTranslation, initReactI18next, Trans } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './locales/en.json'
import cn from './locales/cn.json'
import mm from './locales/mm.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      cn: {
        translation: cn,
      },
      mm: {
        translation: mm,
      },
    },
    // lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export { i18n as default, useTranslation, Trans }
