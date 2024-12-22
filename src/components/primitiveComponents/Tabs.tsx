import * as React from 'react'
import { PixelRatio, Platform, Pressable, StyleSheet, Text, View } from 'react-native'

export const Tabs: React.FC = () => {
  return (
    <View style={styles.tabsContainer}>
      <Tab title="Tab 1" />
      <Tab title="Tab 2" />
      <Tab title="Tab 3" />
      <Tab title="Tab 4" />
      <Tab title="Tab 5" />
    </View>
  )
}

const Tab: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Pressable
      android_ripple={{
        borderless: false,
        color: 'rgb(246,245,248)'
      }}
      style={({ pressed }) => [styles.tab, pressed && styles.pressedTab]}>
      <Text style={[screenStyles.text, styles.tabTitle]}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  pressedTab: {
    opacity: Platform.select({
      android: 1,
      default: 0.4
    })
  },
  tab: {
    alignItems: 'flex-start',
    margin: 10 / PixelRatio.get(),
    padding: 10 / PixelRatio.get()
  },
  tabTitle: {
    fontSize: 16 / PixelRatio.getFontScale(),
    fontWeight: 'bold',
    padding: 10 / PixelRatio.get(),
    textAlign: 'left'
  },
  tabsContainer: {
    alignItems: 'center',
    backgroundColor: 'rgb(89,80,249)',
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
    shadowColor: Platform.select({
      ios: 'gray',
      default: undefined
    }),
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 0.8
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
