import { I18n } from 'i18n-js'
import * as RNLocalize from 'react-native-localize'

import en from './locales/en.json'
import ru from './locales/ru.json'

const i18n = new I18n()

i18n.store(en)
i18n.store(ru)

const locales = RNLocalize.getLocales()

if (Array.isArray(locales)) {
  i18n.locale = locales[0].languageCode
}

i18n.defaultLocale = 'ru'
i18n.translations = {
  ru,
  en
}

export function setLocale(locale: string) {
  i18n.locale = locale
}

export function getLocale() {
  return i18n.locale
}

// @ts-ignore
const lang = (key: I18n.Scope, optional = {}) => i18n.t(key, optional)

export { lang }
