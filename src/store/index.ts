// @flow
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { filterApi } from 'api/filter'
import { mainApi } from 'api/main'
import { excursionsApi } from 'api/objects/excursions'
import { housesApi } from 'api/objects/houses'
import { monumentsApi } from 'api/objects/monuments'
import { moscowcodeApi } from 'api/objects/moscowcode'
import { museumsApi } from 'api/objects/museums'
import { newsApi } from 'api/objects/news'
import { personalitiesApi } from 'api/objects/personalities'
import { placesApi } from 'api/objects/places'
import { postersApi } from 'api/objects/posters'
import { questsApi } from 'api/objects/quests'
import { routesApi } from 'api/objects/routes'
import { searchApi } from 'api/search'
import { userApi, userPostApi } from 'api/user'
import { persistReducer } from 'redux-persist'

import answers from './data/answers'
import app from './data/app'
import excursion from './data/excursion'
import fav from './data/fav'
import main from './data/main'
import map from './data/map'
import myroutes from './data/myroutes'
import nav from './data/nav'
import notify from './data/notify'
import excursions from './data/objects/excursions'
import houses from './data/objects/houses'
import monuments from './data/objects/monuments'
import museums from './data/objects/museums'
import news from './data/objects/news'
import personalities from './data/objects/personalities'
import places from './data/objects/places'
import posters from './data/objects/posters'
import quests from './data/objects/quests'
import routes from './data/objects/routes'
import mytickets from './data/objects/tickets'
import person from './data/person'
import route from './data/route'
import search from './data/search'
import { storage } from './storage'

let enhancer: any

if (__DEV__) {
  const Reactotron = require('../../reactotron').default
  // @ts-ignore
  enhancer = Reactotron.createEnhancer()
}

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
  blacklist: [
    userApi.reducerPath,
    mainApi.reducerPath,
    housesApi.reducerPath,
    filterApi.reducerPath,
    searchApi.reducerPath,
    userPostApi.reducerPath,
    museumsApi.reducerPath,
    questsApi.reducerPath,
    personalitiesApi.reducerPath,
    monumentsApi.reducerPath,
    placesApi.reducerPath,
    routesApi.reducerPath,
    postersApi.reducerPath,
    newsApi.reducerPath,
    moscowcodeApi.reducerPath,
    excursionsApi.reducerPath,
    'main',
    'houses',
    'museums',
    'quests',
    'personalities',
    'monuments',
    'places',
    'routes',
    'map',
    'search',
    'fav',
    'nav',
    'posters',
    'news',
    'excursions',
    'mytickets'
  ]
}

export const rootReducer = combineReducers({
  app: app,
  person: person,
  nav: nav,
  main: main,
  museums: museums,
  houses: houses,
  search: search,
  quests: quests,
  personalities: personalities,
  monuments: monuments,
  places: places,
  routes: routes,
  map: map,
  fav: fav,
  myroutes: myroutes,
  answers: answers,
  route: route,
  notify: notify,
  posters: posters,
  news: news,
  excursions: excursions,
  excursion: excursion,
  mytickets: mytickets,
  [userApi.reducerPath]: userApi.reducer,
  [userPostApi.reducerPath]: userPostApi.reducer,
  [mainApi.reducerPath]: mainApi.reducer,
  [housesApi.reducerPath]: housesApi.reducer,
  [museumsApi.reducerPath]: museumsApi.reducer,
  [filterApi.reducerPath]: filterApi.reducer,
  [searchApi.reducerPath]: searchApi.reducer,
  [questsApi.reducerPath]: questsApi.reducer,
  [personalitiesApi.reducerPath]: personalitiesApi.reducer,
  [monumentsApi.reducerPath]: monumentsApi.reducer,
  [placesApi.reducerPath]: placesApi.reducer,
  [routesApi.reducerPath]: routesApi.reducer,
  [postersApi.reducerPath]: postersApi.reducer,
  [newsApi.reducerPath]: newsApi.reducer,
  [moscowcodeApi.reducerPath]: moscowcodeApi.reducer,
  [excursionsApi.reducerPath]: excursionsApi.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

let options

if (__DEV__) {
  options = {
    reducer: persistedReducer,
    // @ts-ignore
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false
      }).concat(
        userApi.middleware,
        userPostApi.middleware,
        mainApi.middleware,
        housesApi.middleware,
        filterApi.middleware,
        searchApi.middleware,
        museumsApi.middleware,
        questsApi.middleware,
        personalitiesApi.middleware,
        monumentsApi.middleware,
        placesApi.middleware,
        routesApi.middleware,
        postersApi.middleware,
        newsApi.middleware,
        moscowcodeApi.middleware,
        excursionsApi.middleware
      ),
    // @ts-ignore
    enhancers: getDefaultEnhancers => getDefaultEnhancers().concat(enhancer)
  }
} else {
  options = {
    reducer: persistedReducer,
    // @ts-ignore
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false
      }).concat(
        userApi.middleware,
        userPostApi.middleware,
        mainApi.middleware,
        housesApi.middleware,
        filterApi.middleware,
        searchApi.middleware,
        museumsApi.middleware,
        questsApi.middleware,
        personalitiesApi.middleware,
        monumentsApi.middleware,
        placesApi.middleware,
        routesApi.middleware,
        postersApi.middleware,
        newsApi.middleware,
        moscowcodeApi.middleware,
        excursionsApi.middleware
      )
  }
}

export const store = configureStore(options)

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
