// @flow
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { appApi } from 'api'
import { persistReducer } from 'redux-persist'

import app from './data'
import { storage } from './storage'

const reduxStorage = {
  setItem: (key: string, value: string | number | boolean | Uint8Array) => {
    storage.set(key, value)
    return Promise.resolve(true)
  },
  getItem: (key: string) => {
    const value = storage.getString(key)
    return Promise.resolve(value)
  },
  removeItem: (key: string) => {
    storage.delete(key)
    return Promise.resolve()
  }
}

const persistConfig = {
  key: 'root',
  version: 1,
  storage: reduxStorage,
  blacklist: [appApi.reducerPath]
}

export const rootReducer = combineReducers({
  app: app,
  [appApi.reducerPath]: appApi.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const options = {
  reducer: persistedReducer,
  // @ts-ignore
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(appApi.middleware)
}

export const store = configureStore(options)

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
