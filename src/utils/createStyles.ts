// @flow
import * as RN from 'react-native'
import { ImageStyle as DefaultImageStyle, StyleProp, TextStyle } from 'react-native'
import { NamedStyles, StringifiedStyles } from 'react-native-size-matters'
import { ScaledSheet } from 'react-native-size-matters/extend'
import R from 'res/index'
import { TThemeColors } from 'res/theme'

export type createStylesType = <U, T = NamedStyles<U> | NamedStyles<any>>(
  callback: (colors: TThemeColors, fonts: typeof R.fonts, isDark: boolean) => T
) => (
  colors: TThemeColors,
  fonts: typeof R.fonts,
  isDark: boolean
) => {
  [P in keyof T]: RN.RegisteredStyle<T[P] & Record<Extract<keyof T[P], keyof StringifiedStyles>, number>> & StyleProp<TextStyle> & StyleProp<DefaultImageStyle>
}

// @ts-ignore
export const createStyles: createStylesType = (callback) => (colors: TThemeColors, fonts: typeof R.fonts, isDark: boolean) => ScaledSheet.create(callback(colors, fonts, isDark))
