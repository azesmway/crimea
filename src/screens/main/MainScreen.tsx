/**
 * -----------------------------------------------------------------------
 *  Header      : MainScreen.tsx
 *  Created     : 14.12.2024
 *  Modified    : 14.12.2024
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description :
 * -----------------------------------------------------------------------
 */

// @flow
import Wrapper from 'components/ui/wrapper'
import ErrorBoundary from 'ErrorBoundary'
import { useStyles } from 'hooks'
import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Dimensions, Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import R from 'res'
import { Images } from 'res/images'

import stylesConfig from './MainScreen.styles'

type MainScreenProps = {}

const T = R.lang.main

// @ts-ignore
const MainNews = lazy(() => import('components/ui/news'))
// @ts-ignore
const MainTowns = lazy(() => import('components/ui/towns'))

const renderLoader = () => <p>Loading</p>

const NewsComponent = () => (
  <ErrorBoundary>
    <Suspense fallback={renderLoader()}>
      <MainNews />
    </Suspense>
  </ErrorBoundary>
)

const TownsComponent = () => (
  <ErrorBoundary>
    <Suspense fallback={renderLoader()}>
      <MainTowns />
    </Suspense>
  </ErrorBoundary>
)

// eslint-disable-next-line no-empty-pattern
const MainScreen = ({}: MainScreenProps) => {
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

  return (
    <Wrapper>
      <ScrollView>
        <View style={{ width: '100%', alignItems: 'center', backgroundColor: '#fff' }}>
          <Image source={Images.MapImage} style={{ height: 513, width: 822 }} resizeMode={'stretch'} />
        </View>
        <View style={{ width: '90%', height: 80, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#ccc', alignSelf: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 28, color: '#007cc4' }}>{'НОВОСТИ ПРОЕКТА'}</Text>
        </View>
        <View style={{ height: 20 }} />
        <NewsComponent />
        <View style={{ width: '90%', height: 80, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#ccc', alignSelf: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 28, color: '#007cc4' }}>{'ГОРОДА КРЫМА'}</Text>
        </View>
        <View style={{ height: 20 }} />
        <TownsComponent />
      </ScrollView>
    </Wrapper>
  )
}

export default MainScreen
