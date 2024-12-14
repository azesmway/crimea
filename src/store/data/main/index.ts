import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IMain, INearestObject } from 'types/main'

interface IMainState {
  isAppRender: boolean
  data: IMain
  nearestObjects: INearestObject[] | null
  topObjects: INearestObject[] | null
  coordinates: {
    lon: number
    lat: number
  }
  isConnected: boolean | null
  isNearestObjects: boolean | null
  isUnityStart: boolean | null
}

const initialState: IMainState = {
  isAppRender: false,
  data: {
    mainSelections: null,
    mainCategories: null,
    stories: null,
    banner: null,
    favorites: null,
    popupWindows: null,
    topObjects: null,
    authorization: null,
    authorizationMobile: false,
    unityDebug: false
  },
  topObjects: null,
  nearestObjects: null,
  coordinates: {
    lon: 0,
    lat: 0
  },
  isConnected: null,
  isNearestObjects: null,
  isUnityStart: false
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setMain: (state, action: PayloadAction<IMain>) => {
      state.data = action.payload
    },
    setCoordinates: (state, action: PayloadAction<{ lon: number; lat: number }>) => {
      state.coordinates = action.payload
    },
    setConnected: (state, action: PayloadAction<boolean | null>) => {
      state.isConnected = action.payload
    },
    setAppRender: (state, action: PayloadAction<boolean>) => {
      state.isAppRender = action.payload
    },
    setFavorites: (state, action: PayloadAction<any[]>) => {
      state.data.favorites = action.payload
    },
    setNearest: (state, action: PayloadAction<any[]>) => {
      state.nearestObjects = action.payload
    },
    setNearestObjects: (state, action: PayloadAction<boolean>) => {
      state.isNearestObjects = action.payload
    },
    setTopObjects: (state, action: PayloadAction<any[]>) => {
      state.topObjects = action.payload
    },
    setUnityStart: (state, action: PayloadAction<boolean>) => {
      state.isUnityStart = action.payload
    }
  }
})

export const { setMain, setCoordinates, setConnected, setAppRender, setFavorites, setNearest, setNearestObjects, setTopObjects, setUnityStart } = mainSlice.actions

export default mainSlice.reducer
