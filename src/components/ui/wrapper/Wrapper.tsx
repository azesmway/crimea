/**
 * -----------------------------------------------------------------------
 *  Header      : Wrapper.tsx
 *  Created     : 14.12.2024
 *  Modified    : 14.12.2024
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description :
 * -----------------------------------------------------------------------
 */

// @flow
import CenterBlock from 'components/nav/center'
import LeftBlock from 'components/nav/left'
import RightBlock from 'components/nav/right'
import { useColors, useStyles } from 'hooks'
import React, { useEffect, useState } from 'react'
import { Dimensions, ScrollView, View } from 'react-native'
import R from 'res'

import stylesConfig from './Wrapper.styles'

type WrapperProps = {
  children: any
}

const T = R.lang.main

const Wrapper = ({ children }: WrapperProps) => {
  const styles = useStyles(stylesConfig)
  const colors = useColors()
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
  const wS = [1200, 850]
  const wV = screenSize.width < wS[1] ? 220 : screenSize.width < wS[0] ? 280 : w

  return (
    <>
      <View
        style={{
          height: screenSize.width < 540 ? 120 : 120,
          backgroundColor: 'white'
        }}>
        <View style={{ backgroundColor: '#0067A3', width: '100%', height: 20 }} />
        <View style={{ flexDirection: 'row', width: '100%', height: 80, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', height: 80 }}>
            <LeftBlock />
            <CenterBlock />
          </View>
          <View style={{ width: screenSize.width < 380 ? 40 : screenSize.width - wV - 120, alignItems: 'flex-end', justifyContent: 'center' }}>
            <RightBlock />
          </View>
        </View>
        <View style={{ backgroundColor: '#DA251D', width: '100%', height: 20 }} />
      </View>
      {children}
    </>
  )
}

export default Wrapper
