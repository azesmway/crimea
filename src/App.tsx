import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { store } from 'store'
import { PaperProvider } from 'react-native-paper'

import Main from './Main'

const App = () => {
  const persistor = persistStore(store)

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <PaperProvider>
            <Main />
          </PaperProvider>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  )
}

export default App
