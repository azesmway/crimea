import { useNavigation } from '@react-navigation/native'
import { BlurView } from 'expo-blur'
import * as React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { simsScreenTestIDs } from './testIDs'

interface HeaderBarProps {
  scrollValue: Animated.SharedValue<number>
}

const DEFAULT_TOP_INSET = 30

export const HeaderBar: React.FC<HeaderBarProps> = ({ scrollValue }) => {
  const navigation = useNavigation()

  const goBack = React.useCallback(() => {
    navigation.goBack()
  }, [navigation])

  const insets = useSafeAreaInsets()

  const headerButtonContainerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(scrollValue.value, [0, 110, 160], [24, 24, -40], Extrapolate.CLAMP)
        }
      ]
    }
  }, [scrollValue])
  const headerContainerAnimatedStyle = useAnimatedStyle(() => {
    return { opacity: interpolate(scrollValue.value, [0, 110, 150], [0, 0, 1], Extrapolate.CLAMP) }
  }, [scrollValue])
  const headerButtonAnimatedStyle = useAnimatedStyle(() => {
    return { opacity: interpolate(scrollValue.value, [0, 110, 140], [1, 1, 0], Extrapolate.CLAMP) }
  }, [scrollValue])
  const headerDetailsContainerAnimatedStyle = useAnimatedStyle(() => {
    return { opacity: interpolate(scrollValue.value, [0, 250, 330], [0, 0, 1], Extrapolate.CLAMP) }
  }, [scrollValue])

  return (
    <>
      {/*<TouchableOpacity*/}
      {/*  onPress={goBack}*/}
      {/*  style={[styles.headerButtonContainer, headerButtonContainerAnimatedStyle, { top: insets.top || DEFAULT_TOP_INSET, left: insets.left }]}*/}
      {/*  testID={simsScreenTestIDs.headerBarBackButtonTestID}>*/}
      {/*  <Animated.View style={[styles.headerButton, headerButtonAnimatedStyle]}>*/}
      {/*    <Image*/}
      {/*      style={styles.headerImage}*/}
      {/*      resizeMode="contain"*/}
      {/*      source={{*/}
      {/*        uri: 'https://cdn.iconscout.com/icon/free/png-256/chevron-25-433513.png'*/}
      {/*      }}*/}
      {/*    />*/}
      {/*  </Animated.View>*/}
      {/*</TouchableOpacity>*/}
      <Animated.View style={[styles.headerContainer, headerContainerAnimatedStyle]}>
        <BlurView style={styles.headerBlurView} tint="dark" intensity={90} />
      </Animated.View>
      <View style={[styles.headerWrapper, { top: insets.top || DEFAULT_TOP_INSET, left: insets.left, right: insets.right }]}>
        <Animated.View style={headerContainerAnimatedStyle}>
          <TouchableOpacity onPress={goBack} style={styles.headerSearchContainer} testID={simsScreenTestIDs.headerBarSearchButtonTestID}>
            <Image
              style={styles.headerSearchArrow}
              resizeMode="contain"
              source={{
                uri: 'https://www.shareicon.net/data/512x512/2016/05/19/767484_arrows_512x512.png'
              }}
            />
            <Text style={styles.headerSearchText}>Search</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={headerDetailsContainerAnimatedStyle}>
          <Image
            source={{
              uri: 'https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/0c/9e/88/0c9e8824-1373-995f-3be0-30814b1e4d15/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-85-220.png/460x0w.png'
            }}
            style={styles.headerDetailsImage}
          />
        </Animated.View>
        <Animated.View style={[styles.headerDetailsContainer, headerDetailsContainerAnimatedStyle]}>
          <Text style={styles.headerDetailsText}>{'In-App\nPurchases'}</Text>
          <TouchableOpacity style={styles.headerDetailsButton}>
            <Text style={styles.headerDetailsButtonTitle}>GET</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 97
  },
  headerWrapper: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerImage: {
    width: 18,
    height: 18,
    tintColor: '#fff'
  },
  headerButtonContainer: {
    position: 'absolute',
    zIndex: 4
  },
  headerButton: {
    backgroundColor: '#000',
    height: 36,
    width: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerBlurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  headerSearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 60
  },
  headerSearchArrow: {
    width: 25,
    height: 25
  },
  headerSearchText: {
    color: '#2488FF',
    fontSize: 20
  },
  headerDetailsImage: {
    width: 30,
    height: 30,
    borderRadius: 7.5
  },
  headerDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  headerDetailsText: {
    marginLeft: 10,
    color: 'rgb(246,245,248)',
    fontSize: 10,
    textAlign: 'right',
    paddingBottom: 3
  },
  headerDetailsButton: {
    backgroundColor: '#3479F6',
    width: 80,
    height: 33,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8
  },
  headerDetailsButtonTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  }
})
