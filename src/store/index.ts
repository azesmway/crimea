// @flow
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { mainApi } from 'api'
import { persistReducer } from 'redux-persist'

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
  blacklist: [mainApi.reducerPath]
}

export const rootReducer = combineReducers({
  [mainApi.reducerPath]: mainApi.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const options = {
  reducer: persistedReducer,
  // @ts-ignore
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(mainApi.middleware)
}

export const store = configureStore(options)

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
