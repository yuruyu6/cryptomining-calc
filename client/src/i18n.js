import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTransition from './locales/en.json'
import ruTransition from './locales/ru.json'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: {
    translation: enTransition,
  },
  ru: {
    translation: ruTransition,
  },
}

const detectionOptions = {
  order: ['localStorage', 'navigator'],
  caches: ['localStorage'],
}

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    detection: detectionOptions,
    fallbackLng: 'en',
    supportedLngs: ['en', 'ru'],
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
