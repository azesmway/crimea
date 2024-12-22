import { Platform } from 'react-native'

export const LinkingPrefixes = ['veskrim://']

export const DIVIDER = Platform.OS === 'web' ? 2.4 : 1

export const FONT_APP_12 = Platform.OS === 'web' ? 12 / DIVIDER : 12
export const FONT_APP_14 = Platform.OS === 'web' ? 14 / DIVIDER : 14
export const FONT_APP_16 = Platform.OS === 'web' ? 16 / DIVIDER : 16
export const FONT_APP_18 = Platform.OS === 'web' ? 18 / DIVIDER : 18
export const FONT_APP_20 = Platform.OS === 'web' ? 20 / DIVIDER : 20
export const FONT_APP_22 = Platform.OS === 'web' ? 22 / DIVIDER : 22
export const FONT_APP_24 = Platform.OS === 'web' ? 24 / DIVIDER : 24
export const FONT_APP_26 = Platform.OS === 'web' ? 26 / DIVIDER : 26
export const FONT_APP_28 = Platform.OS === 'web' ? 28 / DIVIDER : 28

export const BASE_URL_API = 'https://ves-krim.ru'

export const CAROUSEL_HEIGHT = 100

export const CATEGORIES_MAIN = [37, 38, 4, 19, 40, 41]
export const CATEGORIES_NAME = [
  { id: 37, name: 'Главная' },
  { id: 38, name: 'Карта' },
  { id: 4, name: 'Новости проекта' },
  { id: 19, name: 'Города Крыма' },
  { id: 40, name: 'Что посмотреть' },
  { id: 41, name: 'Отдых и туризм' }
]
