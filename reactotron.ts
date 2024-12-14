// @flow

import type { ReactotronReactNative } from 'reactotron-react-native'
import Reactotron, { trackGlobalErrors } from 'reactotron-react-native'
import mmkvPlugin from 'reactotron-react-native-mmkv'
import { reactotronRedux } from 'reactotron-redux'
import { storage } from 'store/storage'

// @ts-ignore
console.log = Reactotron.log
// @ts-ignore
console.warn = Reactotron.logImportant
// @ts-ignore
console.error = Reactotron.logImportant
// @ts-ignore
console.tron = Reactotron

const reactotron = Reactotron.configure({ host: '192.168.0.100' })
  .useReactNative()
  // @ts-ignore
  .use(reactotronRedux())
  // @ts-ignore
  .use(trackGlobalErrors({}))
  .use(mmkvPlugin<ReactotronReactNative>({ storage }))
  .connect()

export default reactotron
