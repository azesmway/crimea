import { cloneElement } from 'react'
import { Platform, StyleSheet, Text } from 'react-native'
import { s } from 'react-native-size-matters'

const setFontFamily = () => {
  const styles = StyleSheet.create({
    defaultText: {
      fontFamily: Platform.OS === 'ios' ? 'Euclid Flex' : 'EuclidFlex',
      fontSize: s(16),
      lineHeight: s(18)
    }
  })

  // @ts-ignore
  const oldRender = Text.render

  // @ts-ignore
  Text.render = function render(...args) {
    const origin = oldRender.call(this, ...args)
    return cloneElement(origin, {
      style: [styles.defaultText, origin.props.style]
    })
  }
}

export default setFontFamily
