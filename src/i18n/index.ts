import i18n from 'i18next'
import { useTranslation, initReactI18next, Trans } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-chained-backend'
import LocalStorageBackend from 'i18next-localstorage-backend'
import HttpApi from 'i18next-http-backend'

i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      backends: [LocalStorageBackend, HttpApi],
      backendOptions: [
        {
          prefix: 'i18next_res_',
          expirationTime: 7 * 24 * 60 * 60 * 1000,
          defaultVersion: 'v1.5',
        },
        {
          loadPath: '/locales/{{lng}}.json',
        },
      ],
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    debug: true,
  })
// console.log(i18n)

export { i18n as default, useTranslation, Trans }
