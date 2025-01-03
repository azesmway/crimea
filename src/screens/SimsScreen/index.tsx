import { Tabs } from 'components/primitiveComponents/Tabs'
import * as React from 'react'
import type { ScrollView } from 'react-native'
import { StatusBar, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StickyHeaderScrollView, useStickyHeaderScrollProps } from 'react-native-sticky-parallax-header'

import { text } from './data'
import { Foreground } from './Foreground'
import { HeaderBar } from './HeaderBar'
import { simsScreenTestIDs } from './testIDs'

const PARALLAX_HEIGHT = 330
const HEADER_BAR_HEIGHT = 92
const SNAP_START_THRESHOLD = 50
const SNAP_STOP_THRESHOLD = 330

const SimsScreen: React.FC = () => {
  const { width: windowWidth } = useWindowDimensions()
  const { onMomentumScrollEnd, onScroll, onScrollEndDrag, scrollHeight, scrollValue, scrollViewRef } = useStickyHeaderScrollProps<ScrollView>({
    parallaxHeight: PARALLAX_HEIGHT,
    snapStartThreshold: SNAP_START_THRESHOLD,
    snapStopThreshold: SNAP_STOP_THRESHOLD,
    snapToEdge: true
  })

  return (
    <View style={screenStyles.screenContainer}>
      <View style={[styles.headerBarContainer, { width: windowWidth }]}>
        <HeaderBar scrollValue={scrollValue} />
      </View>
      <View style={screenStyles.stretchContainer}>
        <StickyHeaderScrollView
          ref={scrollViewRef}
          containerStyle={screenStyles.stretchContainer}
          onScroll={onScroll}
          onMomentumScrollEnd={onMomentumScrollEnd}
          onScrollEndDrag={onScrollEndDrag}
          renderHeader={() => {
            return (
              <View pointerEvents="box-none" style={{ height: scrollHeight }}>
                <Foreground scrollValue={scrollValue} />
              </View>
            )
          }}
          // renderTabs={() => (
          //   <View style={styles.tabContainer}>
          //     <Tabs />
          //   </View>
          // )}
          showsVerticalScrollIndicator={false}
          style={screenStyles.stretch}>
          <SafeAreaView edges={['left', 'right', 'bottom']} style={styles.content}>
            <Text style={screenStyles.text} testID={simsScreenTestIDs.contentTestID}>
              {text}
            </Text>
          </SafeAreaView>
        </StickyHeaderScrollView>
      </View>
      <StatusBar barStyle="light-content" backgroundColor={'#000'} translucent />
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    alignSelf: 'stretch'
  },
  headerBarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: HEADER_BAR_HEIGHT,
    flex: 1,
    overflow: 'hidden',
    zIndex: 3
  },
  tabContainer: {
    paddingTop: HEADER_BAR_HEIGHT
  }
})

const screenStyles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginBottom: 25
  },
  contentText: {
    alignSelf: 'flex-start',
    color: '#000',
    fontFamily: 'AvertaStd-Semibold',
    fontSize: 24,
    letterSpacing: -0.2,
    lineHeight: 28,
    paddingBottom: 20,
    paddingTop: 40
  },
  darkBackground: {
    backgroundColor: '#000'
  },
  lightBackground: {
    backgroundColor: '#fff'
  },
  screenContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center'
  },
  stretch: {
    alignSelf: 'stretch'
  },
  stretchContainer: {
    alignSelf: 'stretch',
    flex: 1
  },
  text: {
    fontFamily: 'AvertaStd-Regular'
  }
})

export default SimsScreen
