// @flow
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IMonumentsState {
  pagination: {
    pageSize: number
    page: number
    total: number
  }
  sections: any[]
  sort: string
}

const initialState: IMonumentsState = {
  pagination: {
    pageSize: 0,
    page: 0,
    total: 0
  },
  sections: [],
  sort: ''
}

export const monumentsSlice = createSlice({
  name: 'monuments',
  initialState,
  reducers: {
    setPagination: (state, action: PayloadAction<any>) => {
      // @ts-ignore
      state.pagination = action.payload
    },
    clearMonuments: state => {
      // @ts-ignore
      state.data = []
      // @ts-ignore
      state.pagination = {
        pageSize: 0,
        page: 0,
        total: 0
      }
    },
    setFilterMonuments: (state, action: PayloadAction<any>) => {
      state.sections = action.payload
    },
    setSortMonuments: (state, action: PayloadAction<string>) => {
      state.sort = action.payload
    }
  }
})

export const { setPagination, clearMonuments, setFilterMonuments, setSortMonuments } = monumentsSlice.actions

export default monumentsSlice.reducer
