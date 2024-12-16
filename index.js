/**
 * @format
 */

import { createRoot } from 'react-dom/client'
import { AppRegistry, Platform } from 'react-native'

import { name as appName } from './app.json'
import App from './src/App'

AppRegistry.registerComponent(appName, () => App)

if (Platform.OS === 'web') {
  const root = createRoot(document.getElementById('root'))
  root.render(<App />)
}
