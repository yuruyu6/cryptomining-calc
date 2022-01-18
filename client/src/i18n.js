import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      'Welcome to React': 'Welcome to React and react-i18next',
      'Last update:': 'Last update:',
      'ETH/USDT Rate': 'ETH/USDT Rate',
      Export: 'Export',
      Import: 'Import',
      Summary: 'Summary',
      'Add your equipment for tracking earnings':
        'Add your equipment for tracking earnings',
      'Information provided by HiveOn Pool':
        'Information provided by HiveOn Pool',
      daily: 'daily',
      weekly: 'weekly',
      monthly: 'monthly',
      yearly: 'yearly',
      'earnings per': 'earnings per',
      Add: 'Add',
      Name: 'Name',
      Hashrate: 'Hashrate',
      Back: 'Back',
      Close: 'Close',
      'Export data': 'Export data',
      'Import data': 'Import data',
      Copy: 'Copy',
      'ExportDescription': 'Click the copy button below to save your data and use it to import to another device',
      'ImportDescription': 'Paste saved string into the text field below to import your data',
      'Incorrect export phrase': 'Incorrect export phrase',
      'Rewards History': 'Rewards History',
      'per': 'per',
      'Show More': 'Show More',
      'Expected Reward': 'Expected Reward',
      'Date': 'Date'
    },
  },
  ru: {
    translation: {
      'Welcome to React': 'Bienvenue à React et react-i18next',
      'Last update:': 'Последнее обновление:',
      'ETH/USDT Rate': 'Курс ETH/USDT',
      Export: 'Экспортировать настройки',
      Import: 'Импортировать настройки',
      Summary: 'Общее',
      'Add your equipment for tracking earnings':
        'Добавьте свое оборудование для отображения статистики',
      'Information provided by HiveOn Pool':
        'Информация предоставлена HiveOn Pool',
      daily: 'дневные',
      weekly: 'недельные',
      monthly: 'месячные',
      yearly: 'годовые',
      'earnings per': 'вознаграждения за',
      Add: 'Добавить',
      Name: 'Название',
      Hashrate: 'Хэшрейт',
      Back: 'Назад',
      Close: 'Закрыть',
      'Export data': 'Экспортировать',
      'Import data': 'Импортировать',
      Copy: 'Копировать',
      'ExportDescription': 'Скопируйте строку и используйте ее для импорта на другом устройстве', 
      'ImportDescription': 'Вставьте сохраненную строку для импорта ранее сохраненных настроек',
      'Incorrect export phrase': 'Строка некорректная',
      'Rewards History': 'История вознаграждений',
      'per': 'за',
      'Show More': 'Показать больше',
      'Expected Reward': 'ожидаемая награда',
      'Date': 'Дата'
    },
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
