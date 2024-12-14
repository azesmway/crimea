// @flow
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IMyRoutesState {
  routes: any[]
  pagination: {
    pageSize: number
    page: number
    total: number
  }
  sections: any[]
  sort: string
}

const initialState: IMyRoutesState = {
  routes: [],
  pagination: {
    pageSize: 0,
    page: 0,
    total: 0
  },
  sections: [],
  sort: ''
}

export const myroutesSlice = createSlice({
  name: 'myroutes',
  initialState,
  reducers: {
    setPagination: (state, action: PayloadAction<any>) => {
      // @ts-ignore
      state.pagination = action.payload
    },
    setMyRoutes: (state, action: PayloadAction<number[]>) => {
      state.routes = action.payload
    },
    setFilterRoute: (state, action: PayloadAction<any>) => {
      state.sections = action.payload
    },
    setSortRoute: (state, action: PayloadAction<string>) => {
      state.sort = action.payload
    }
  }
})

export const { setPagination, setFilterRoute, setSortRoute, setMyRoutes } = myroutesSlice.actions

export default myroutesSlice.reducer
