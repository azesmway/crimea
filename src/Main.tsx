import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Appearance, Linking } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import R from 'res'
import theme from 'res/theme.ts'
import ArticleNews from 'screens/article'
import MainScreen from 'screens/main'
import { lang } from 'utils/lang'

const T = R.lang.main

const Main = () => {
  const isDarkMode = Appearance.getColorScheme() === 'dark'
  const RootStack = createNativeStackNavigator()

  const config = {
    screens: {
      [R.routes.MAIN_SCREEN]: '/',
      [R.routes.ARTICLE_NEWS]: '/news/:id'
    }
  }

  const linking = {
    prefixes: R.consts.LinkingPrefixes,
    config,
    async getInitialURL() {
      const url = await Linking.getInitialURL()
      return url && url.replace(R.consts.LinkingPrefixes[0], '/')
    }
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer
        onReady={() => {}}
        theme={isDarkMode ? theme.dark : theme.light}
        // @ts-ignore
        linking={linking}>
        <RootStack.Navigator initialRouteName={R.routes.MAIN_SCREEN}>
          <RootStack.Screen name={R.routes.MAIN_SCREEN} options={{ headerShown: false, title: lang(`${T}.mainScreenTitle`) }} component={MainScreen} />
          <RootStack.Screen name={R.routes.ARTICLE_NEWS} options={{ headerShown: false }} component={ArticleNews} />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default Main