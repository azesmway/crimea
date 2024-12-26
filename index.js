/**
 * @format
 */
import robotoFont from 'assets/fonts/Roboto-Regular.ttf'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { AppRegistry, Platform } from 'react-native'
import iconFontAw from 'react-native-vector-icons/Fonts/FontAwesome.ttf'
import iconFontM from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf'
import iconFont from 'react-native-vector-icons/Fonts/MaterialIcons.ttf'

import App from './src/App'

if (Platform.OS === 'web') {
  const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: MaterialIcons;
}`

  const iconFontStylesM = `@font-face {
  src: url(${iconFontM});
  font-family: MaterialCommunityIcons;
}`

  const iconFontStylesAw = `@font-face {
  src: url(${iconFontAw});
  font-family: FontAwesome;
}`

  const robotoFontStyles = `@font-face {
  src: url(${robotoFont});
  font-family: Roboto;
}`

  // Create stylesheet
  const style = document.createElement('style')
  style.type = 'text/css'
  if (style.styleSheet) {
    style.styleSheet.cssText = iconFontStyles
  } else {
    style.appendChild(document.createTextNode(iconFontStyles))
    style.appendChild(document.createTextNode(iconFontStylesM))
    style.appendChild(document.createTextNode(iconFontStylesAw))
    style.appendChild(document.createTextNode(robotoFontStyles))
  }

  // Inject stylesheet
  document.head.appendChild(style)
}

AppRegistry.registerComponent('crimea', () => App)

if (Platform.OS === 'web') {
  const root = createRoot(document.getElementById('root'))
  root.render(<App />)
}

// https://xn--b1agpite6ef.xn--p1ai
