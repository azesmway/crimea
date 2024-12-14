import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IApp, IAudioPlayer } from 'types/app'

const initialState: IApp = {
  locationGranted: -1,
  isFirstStart: true,
  cameraGranted: -1,
  audio: {
    url: '',
    play: false,
    name: ''
  },
  lang: 'ru',
  rating: null,
  appMode: 'system',
  errorRefetch: 0,
  ratingCriteria: [],
  ticket: null
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppFirstStart: (state, action: PayloadAction<boolean>) => {
      state.isFirstStart = action.payload
    },
    setLocationGranted: (state, action: PayloadAction<number>) => {
      state.locationGranted = action.payload
    },
    setCameraGranted: (state, action: PayloadAction<number>) => {
      state.cameraGranted = action.payload
    },
    setAudio: (state, action: PayloadAction<IAudioPlayer>) => {
      state.audio = action.payload
    },
    setLangApp: (state, action: PayloadAction<string>) => {
      state.lang = action.payload
    },
    setViewRatingBlock: (state, action: PayloadAction<any>) => {
      state.rating = action.payload
    },
    setAppMode: (state, action: PayloadAction<string>) => {
      state.appMode = action.payload
    },
    setErrorRefetch: (state, action: PayloadAction<number>) => {
      state.errorRefetch = action.payload
    },
    setRatingCriteria: (state, action: PayloadAction<any[]>) => {
      state.ratingCriteria = action.payload
    },
    setViewTicketBlock: (state, action: PayloadAction<any>) => {
      state.ticket = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setAppFirstStart, setLocationGranted, setCameraGranted, setAudio, setLangApp, setViewRatingBlock, setAppMode, setErrorRefetch, setRatingCriteria, setViewTicketBlock } = appSlice.actions

export default appSlice.reducer
