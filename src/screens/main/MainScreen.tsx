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
// import FooterBlock from 'components/ui/footer'
// import MainTourism from 'components/ui/tourism'
import Wrapper from 'components/ui/wrapper'
import ErrorBoundary from 'ErrorBoundary'
import { useStyles } from 'hooks'
import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Dimensions, Image, ScrollView, Text, useWindowDimensions, View } from 'react-native'
import { useSelector } from 'react-redux'
// import Image from 'react-native-scalable-image'
import R from 'res'
// import { Images } from 'res/images'
import { RootState } from 'store'

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
  const categories = useSelector((state: RootState) => state.app.categories)
  const { width, height } = useWindowDimensions()
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

  const newsTitle = categories.filter((c: any) => Number(c.id) === 4)[0]
  const townsTitle = categories.filter((c: any) => Number(c.id) === 19)[0]
  const turTitle = categories.filter((c: any) => Number(c.id) === 41)[0]

  return (
    <Wrapper>
      <ScrollView style={{ backgroundColor: '#fff' }}>
        {/*<View style={{ height: 20 }} />*/}
        {/*<View style={{ width: '100%', alignItems: 'center' }}>*/}
        {/*  <Image source={Images.MapImage} style={{ width: 791, height: 500 }} />*/}
        {/*</View>*/}
        {/*<View style={{ height: 40 }} />*/}
        {/*<View style={{ width: '90%', height: 80, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#ccc', alignSelf: 'center' }}>*/}
        {/*  <Text style={styles.titleHeader}>{newsTitle.name}</Text>*/}
        {/*</View>*/}
        {/*<View style={{ height: 20 }} />*/}
        {/*<NewsComponent />*/}
        {/*<View style={{ width: '90%', height: 80, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#ccc', alignSelf: 'center' }}>*/}
        {/*  <Text style={styles.titleHeader}>{townsTitle.name}</Text>*/}
        {/*</View>*/}
        {/*<View style={{ height: 20 }} />*/}
        {/*<TownsComponent />*/}
        {/*<View style={{ width: '100%', backgroundColor: '#0067A3' }}>*/}
        {/*  <View style={{ width: '90%', height: 80, alignItems: 'center', justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#ccc', alignSelf: 'center' }}>*/}
        {/*    <Text style={[styles.titleHeader, { color: 'white' }]}>{turTitle.name}</Text>*/}
        {/*  </View>*/}
        {/*  <View style={{ height: 20 }} />*/}
        {/*  <MainTourism />*/}
        {/*  <View style={{ height: 20 }} />*/}
        {/*</View>*/}
        {/*<FooterBlock />*/}
        <View style={{ width: '100%', height: Dimensions.get('window').height - (SCREEN_WIDTH < 540 ? 100 : 120), alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center', color: '#595959' }}>{'ПРОЕКТ НАХОДИТСЯ В РАЗРАБОТКЕ!'}</Text>
        </View>
      </ScrollView>
    </Wrapper>
  )
}

export default MainScreen
