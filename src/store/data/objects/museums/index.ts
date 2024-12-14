// @flow
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IMuseumsState {
  pagination: {
    pageSize: number
    page: number
    total: number
  }
  sections: any[]
  sort: string
}

const initialState: IMuseumsState = {
  pagination: {
    pageSize: 0,
    page: 0,
    total: 0
  },
  sections: [],
  sort: ''
}

export const museumsSlice = createSlice({
  name: 'museums',
  initialState,
  reducers: {
    setPagination: (state, action: PayloadAction<any>) => {
      // @ts-ignore
      state.pagination = action.payload
    },
    clearMuseums: state => {
      // @ts-ignore
      state.data = []
      // @ts-ignore
      state.pagination = {
        pageSize: 0,
        page: 0,
        total: 0
      }
    },
    setFilterMuseums: (state, action: PayloadAction<any>) => {
      state.sections = action.payload
    },
    setSortMuseums: (state, action: PayloadAction<string>) => {
      state.sort = action.payload
    }
  }
})

export const { setPagination, clearMuseums, setFilterMuseums, setSortMuseums } = museumsSlice.actions

export default museumsSlice.reducer
