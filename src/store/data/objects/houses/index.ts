// @flow
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IHousesState {
  pagination: {
    pageSize: number
    page: number
    total: number
  }
  sections: any[]
  sort: string
}

const initialState: IHousesState = {
  pagination: {
    pageSize: 0,
    page: 0,
    total: 0
  },
  sections: [],
  sort: ''
}

export const housesSlice = createSlice({
  name: 'houses',
  initialState,
  reducers: {
    setPagination: (state, action: PayloadAction<any>) => {
      // @ts-ignore
      state.pagination = action.payload
    },
    clearHouses: state => {
      // @ts-ignore
      state.data = []
      // @ts-ignore
      state.pagination = {
        pageSize: 0,
        page: 0,
        total: 0
      }
    },
    setFilterHouses: (state, action: PayloadAction<any>) => {
      state.sections = action.payload
    },
    setSortHouses: (state, action: PayloadAction<string>) => {
      state.sort = action.payload
    }
  }
})

export const { clearHouses, setFilterHouses, setPagination, setSortHouses } = housesSlice.actions

export default housesSlice.reducer
