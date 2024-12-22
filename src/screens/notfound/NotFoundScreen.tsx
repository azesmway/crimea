/**
 * -----------------------------------------------------------------------
 *  Header      : NotFoundScreen.tsx
 *  Created     : 18.12.2024
 *  Modified    : 18.12.2024
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description :
 * -----------------------------------------------------------------------
 */

// @flow
import Wrapper from 'components/ui/wrapper'
import { useStyles } from 'hooks'
import React, { useEffect, useState } from 'react'
import { Dimensions, ScrollView, Text, useWindowDimensions, View } from 'react-native'
import R from 'res'

import stylesConfig from './NotFoundScreen.styles'

type NotFoundScreenProps = {}

const T = R.lang

// eslint-disable-next-line no-empty-pattern
const NotFoundScreen = ({}: NotFoundScreenProps) => {
  const styles = useStyles(stylesConfig)
  const [screenSize, setScreenSize] = useState({ width: Dimensions.get('window').width, height: Dimensions.get('window').height })
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions()

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

  return (
    <Wrapper>
      <ScrollView style={{ backgroundColor: '#fff' }}>
        <View style={{ width: '100%', height: Dimensions.get('window').height - (SCREEN_WIDTH < 540 ? 100 : 120), alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center', color: '#595959' }}>{'ОШИБКА 404'}</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center', color: '#595959' }}>{'СТРАНИЦА НЕ НАЙДЕНА'}</Text>
        </View>
      </ScrollView>
    </Wrapper>
  )
}

export default NotFoundScreen
