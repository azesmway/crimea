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
  filter: {
    startDate: string | null
    endDate: string | null
  } | null
}

const initialState: IPlacesState = {
  pagination: {
    pageSize: 0,
    page: 0,
    total: 0
  },
  sections: [],
  sort: '',
  filter: null
}

export const postersSlice = createSlice({
  name: 'posters',
  initialState,
  reducers: {
    setPagination: (state, action: PayloadAction<any>) => {
      // @ts-ignore
      state.pagination = action.payload
    },
    clearPosters: state => {
      // @ts-ignore
      state.data = []
      // @ts-ignore
      state.pagination = {
        pageSize: 0,
        page: 0,
        total: 0
      }
    },
    setFilterPosters: (state, action: PayloadAction<any>) => {
      state.sections = action.payload
    },
    setSortPosters: (state, action: PayloadAction<string>) => {
      state.sort = action.payload
    },
    setFilterDatePosters: (state, action: PayloadAction<any>) => {
      state.filter = action.payload
    }
  }
})

export const { setPagination, clearPosters, setFilterPosters, setSortPosters, setFilterDatePosters } = postersSlice.actions

export default postersSlice.reducer
