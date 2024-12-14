// @flow
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IExcursionsState {
  pagination: {
    pageSize: number
    page: number
    total: number
  }
  sections: any[]
  sort: string
  pass: string
  sign: string
}

const initialState: IExcursionsState = {
  pagination: {
    pageSize: 0,
    page: 0,
    total: 0
  },
  sections: [],
  sort: '',
  pass: '',
  sign: ''
}

export const excursionsSlice = createSlice({
  name: 'excursions',
  initialState,
  reducers: {
    setPagination: (state, action: PayloadAction<any>) => {
      // @ts-ignore
      state.pagination = action.payload
    },
    clearExcursions: state => {
      // @ts-ignore
      state.data = []
      // @ts-ignore
      state.pagination = {
        pageSize: 0,
        page: 0,
        total: 0
      }
    },
    setFilterExcursions: (state, action: PayloadAction<any>) => {
      state.sections = action.payload
    },
    setSortExcursions: (state, action: PayloadAction<string>) => {
      state.sort = action.payload
    },
    setPassExcursions: (state, action: PayloadAction<string>) => {
      state.pass = action.payload
    },
    setSignExcursions: (state, action: PayloadAction<string>) => {
      state.sign = action.payload
    }
  }
})

export const { clearExcursions, setFilterExcursions, setPagination, setSortExcursions, setPassExcursions, setSignExcursions } = excursionsSlice.actions

export default excursionsSlice.reducer
