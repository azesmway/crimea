// @flow
import { DarkTheme, DefaultTheme } from '@react-navigation/native'

const theme = {
  light: {
    ...DefaultTheme,
    dark: false,
    colors: {
      ...DefaultTheme.colors,
      primary: '#FF5D54',
      background: 'transparent',
      backgroundView: '#ffffff',
      backgroundMenu: '#F6F6FB',
      press: '#DFDFEA',
      text: '#131921',
      border: '#DFDFEA',
      notification: '#8582EF',
      header: '#6D96FD',
      backgroundPrimary: '#FFFFFF',
      backgroundSecondary: '#F6F6FB',
      textPrimary: '#131921',
      textSecondary: '#818181',
      iconInactive: '#818181',
      iconActive: '#131921',
      textInactive: '#ADAFC6',
      textActive: '#131921',
      textSuccess: '#57E3A0',
      white: '#FFF',
      black: '#000',
      tags: '#DFDFEA',
      tagsText: '#131921',
      filter: '#000',
      answer: '#262E3A',
      link: 'rgb(66,154,220)',
      storyBackground: '#262E3A',
      backgroundEvents: '#EDEDED',
      questBackground: '#FF7C74',
      card: '#f2f2f8',
      title: '#646464'
    }
  },
  dark: {
    ...DarkTheme,
    dark: true,
    colors: {
      ...DarkTheme.colors,
      primary: '#FF5D54',
      background: 'rgb(18, 18, 18)',
      backgroundView: '#14191f',
      backgroundMenu: '#272e38',
      press: '#414E5E',
      text: '#DFDFEA',
      border: '#414E5E',
      notification: '#8582EF',
      header: '#6D96FD',
      backgroundPrimary: '#262E3A',
      backgroundSecondary: '#1E2630',
      textPrimary: '#DFDFEA',
      textSecondary: '#9096A4',
      iconInactive: '#818181',
      iconActive: '#FFFFFF',
      textInactive: '#ADAFC6',
      textActive: '#FFFFFF',
      textSuccess: '#57E3A0',
      white: '#FFF',
      black: '#000',
      tags: '#DFDFEA',
      tagsText: '#131921',
      filter: '#FFF',
      answer: '#515458',
      link: 'rgb(66,154,220)',
      storyBackground: '#262E3A',
      backgroundEvents: '#313844',
      questBackground: '#FF7C74',
      card: '#14191f',
      title: '#8d8d8d'
    }
  }
}

export type TTheme = typeof theme.light & typeof theme.dark
export type TThemeColors = typeof theme.light.colors & typeof theme.dark.colors

export default theme
