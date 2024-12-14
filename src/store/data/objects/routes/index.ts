// @flow
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IRoutesState {
  pagination: {
    pageSize: number
    page: number
    total: number
  }
  sections: any[]
  sort: string
}

const initialState: IRoutesState = {
  pagination: {
    pageSize: 0,
    page: 0,
    total: 0
  },
  sections: [],
  sort: ''
}

export const routesSlice = createSlice({
  name: 'routes',
  initialState,
  reducers: {
    setPagination: (state, action: PayloadAction<any>) => {
      // @ts-ignore
      state.pagination = action.payload
    },
    clearRoutes: state => {
      // @ts-ignore
      state.data = []
      // @ts-ignore
      state.pagination = {
        pageSize: 0,
        page: 0,
        total: 0
      }
    },
    setFilterRoutes: (state, action: PayloadAction<any>) => {
      state.sections = action.payload
    },
    setSortRoutes: (state, action: PayloadAction<string>) => {
      state.sort = action.payload
    }
  }
})

export const { setPagination, clearRoutes, setFilterRoutes, setSortRoutes } = routesSlice.actions

export default routesSlice.reducer
