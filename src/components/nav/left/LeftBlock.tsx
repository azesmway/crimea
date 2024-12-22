/**
 * -----------------------------------------------------------------------
 *  Header      : LeftBlock.tsx
 *  Created     : 14.12.2024
 *  Modified    : 14.12.2024
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description :
 * -----------------------------------------------------------------------
 */

// @flow
import { useStyles } from 'hooks'
import React, {useEffect, useState} from 'react';
import {Dimensions, Image, useWindowDimensions, View} from 'react-native';
import R from 'res'
import { Images } from 'res/images'

import stylesConfig from './LeftBlock.styles'

type LeftBlockProps = {}

const T = R.lang

// eslint-disable-next-line no-empty-pattern
const LeftBlock = ({}: LeftBlockProps) => {
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

  const wV = screenSize.width < 350 ? 75 : screenSize.width < 380 ? 95 : 105
  const hV = screenSize.width < 350 ? 75 : screenSize.width < 380 ? 85 : 95
  const wS = screenSize.width < 350 ? 80 : screenSize.width < 380 ? 100 : 120

  return (
    <View
      style={{
        width: wS,
        minWidth: wS,
        maxWidth: wS,
        alignItems: 'flex-start',
        justifyContent: 'center'
      }}>
      <Image source={Images.BirdImage} style={{ width: wV, height: hV, marginBottom: 10, marginLeft: 20 }} />
    </View>
  )
}

export default LeftBlock
