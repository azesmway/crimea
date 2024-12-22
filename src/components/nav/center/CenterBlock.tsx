/**
 * -----------------------------------------------------------------------
 *  Header      : CenterBlock.tsx
 *  Created     : 15.12.2024
 *  Modified    : 15.12.2024
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description :
 * -----------------------------------------------------------------------
 */

// @flow
import { useStyles } from 'hooks'
import React, { useEffect, useState } from 'react'
import { Dimensions, Text, View } from 'react-native'
import R from 'res'

import stylesConfig from './CenterBlock.styles'

type CenterBlockProps = {}

const T = R.lang

// eslint-disable-next-line no-empty-pattern
const CenterBlock = ({}: CenterBlockProps) => {
  const styles = useStyles(stylesConfig)
  const [screenSize, setScreenSize] = useState({ width: Dimensions.get('window').width, height: Dimensions.get('window').height })

  const updateDimensions = () => {
    // @ts-ignore
    setScreenSize({ width: window.innerWidth, height: window.innerHeight })
  }

  useEffect(() => {
    // @ts-ignore
    window.addEventListener('resize', updateDimensions)

    // @ts-ignore
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const w = 330
  const s = 40
  const wS = [1200, 850]
  const wV = screenSize.width < wS[1] ? 220 : screenSize.width < wS[0] ? 280 : w
  const sV = screenSize.width < wS[1] ? 26 : screenSize.width < wS[0] ? 32 : s

  return (
    <View
      style={{
        width: wV,
        minWidth: wV,
        maxWidth: wV,
        alignItems: 'flex-start',
        justifyContent: 'center'
      }}>
      <Text style={{ fontWeight: 'bold', fontSize: sV, color: '#007cc4', marginLeft: 10 }}>{'ВЕСЬ КРЫМ.РФ'}</Text>
    </View>
  )
}

export default CenterBlock
