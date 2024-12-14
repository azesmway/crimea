// @flow
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IPersonalitiesState {
  pagination: {
    pageSize: number
    page: number
    total: number
  }
  sections: any[]
  sort: string
}

const initialState: IPersonalitiesState = {
  pagination: {
    pageSize: 0,
    page: 0,
    total: 0
  },
  sections: [],
  sort: ''
}

export const personalitiesSlice = createSlice({
  name: 'personalities',
  initialState,
  reducers: {
    setPagination: (state, action: PayloadAction<any>) => {
      // @ts-ignore
      state.pagination = action.payload
    },
    clearPersonalities: state => {
      // @ts-ignore
      state.data = []
      // @ts-ignore
      state.pagination = {
        pageSize: 0,
        page: 0,
        total: 0
      }
    },
    setFilterPersonalities: (state, action: PayloadAction<any>) => {
      state.sections = action.payload
    },
    setSortPersonalities: (state, action: PayloadAction<string>) => {
      state.sort = action.payload
    }
  }
})

export const { setPagination, clearPersonalities, setFilterPersonalities, setSortPersonalities } = personalitiesSlice.actions

export default personalitiesSlice.reducer
