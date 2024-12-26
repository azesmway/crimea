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
// import { OrbitControls } from '@react-three/drei'
// import { Canvas } from '@react-three/fiber'
import FooterBlock from 'components/ui/footer'
import MainTourism from 'components/ui/tourism'
import Wrapper from 'components/ui/wrapper'
import ErrorBoundary from 'ErrorBoundary'
import { useStyles } from 'hooks'
// import Map3D from 'models/Map3D'
import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Dimensions, Image, ScrollView, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
// import Image from 'react-native-scalable-image'
import R from 'res'
import { Images } from 'res/images'
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

  const newsTitle = categories.length > 0 ? categories.filter((c: any) => Number(c.id) === 4)[0] : [{ name: '' }]
  const townsTitle = categories.length > 0 ? categories.filter((c: any) => Number(c.id) === 19)[0] : [{ name: '' }]
  const turTitle = categories.length > 0 ? categories.filter((c: any) => Number(c.id) === 41)[0] : [{ name: '' }]

  // const renderHorseCanvas = () => {
  //   return (
  //     <Canvas shadows>
  //       <directionalLight position={[5, 10, 15]} intensity={1} castShadow />
  //       <directionalLight position={[-10, 10, 15]} intensity={1} />
  //       <directionalLight position={[10, 10, 15]} intensity={1} />
  //       <Suspense fallback={null}>
  //         <Map3D />
  //       </Suspense>
  //       <OrbitControls enableZoom={true} />
  //     </Canvas>
  //   )
  // }
  //             renderHorseCanvas()
  return (
    <Wrapper>
      <ScrollView style={{ backgroundColor: '#fff' }}>
        <View style={{ height: 20 }} />
        <View style={{ width: 1700, height: 500, alignItems: 'center' }}>
          <Image source={Images.MapImage} style={{ width: 791, height: 500 }} />
        </View>
        <View style={{ height: 40 }} />
        <View
          style={{
            width: '90%',
            height: 80,
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
            alignSelf: 'center'
          }}>
          <Text style={styles.titleHeader}>{newsTitle.name}</Text>
        </View>
        <View style={{ height: 20 }} />
        <NewsComponent />
        <View
          style={{
            width: '90%',
            height: 80,
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
            alignSelf: 'center'
          }}>
          <Text style={styles.titleHeader}>{townsTitle.name}</Text>
        </View>
        <View style={{ height: 20 }} />
        <TownsComponent />
        <View style={{ width: '100%', backgroundColor: '#0067A3' }}>
          <View
            style={{
              width: '90%',
              height: 80,
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomWidth: 1,
              borderBottomColor: '#ccc',
              alignSelf: 'center'
            }}>
            <Text style={[styles.titleHeader, { color: 'white' }]}>{turTitle.name}</Text>
          </View>
          <View style={{ height: 20 }} />
          <MainTourism />
          <View style={{ height: 20 }} />
        </View>
        <FooterBlock />
        {/*<View style={{ width: '100%', height: Dimensions.get('window').height - (Dimensions.get('window').width < 540 ? 100 : 120), alignItems: 'center', justifyContent: 'center' }}>*/}
        {/*  <Text style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center', color: '#595959' }}>{'ПРОЕКТ НАХОДИТСЯ В РАЗРАБОТКЕ!'}</Text>*/}
        {/*</View>*/}
      </ScrollView>
    </Wrapper>
  )
}

export default MainScreen
