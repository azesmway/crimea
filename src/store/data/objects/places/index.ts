// @flow
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IPlacesState {
  pagination: {
    pageSize: number
    page: number
    total: number
  }
  sections: any[]
  sort: string
}

const initialState: IPlacesState = {
  pagination: {
    pageSize: 0,
    page: 0,
    total: 0
  },
  sections: [],
  sort: ''
}

export const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    setPagination: (state, action: PayloadAction<any>) => {
      // @ts-ignore
      state.pagination = action.payload
    },
    clearPlaces: state => {
      // @ts-ignore
      state.data = []
      // @ts-ignore
      state.pagination = {
        pageSize: 0,
        page: 0,
        total: 0
      }
    },
    setFilterPlaces: (state, action: PayloadAction<any>) => {
      state.sections = action.payload
    },
    setSortPlaces: (state, action: PayloadAction<string>) => {
      state.sort = action.payload
    }
  }
})

export const { setPagination, clearPlaces, setFilterPlaces, setSortPlaces } = placesSlice.actions

export default placesSlice.reducer
