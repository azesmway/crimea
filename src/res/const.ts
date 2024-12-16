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

export const BASE_URL_API = 'https://xn--b1agpite6ef.xn--p1ai'

export const CAROUSEL_HEIGHT = 100
