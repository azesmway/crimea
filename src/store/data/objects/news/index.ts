// @flow
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface INewsState {
  pagination: {
    pageSize: number
    page: number
    total: number
  }
  sections: any[]
  sort: string
}

const initialState: INewsState = {
  pagination: {
    pageSize: 0,
    page: 0,
    total: 0
  },
  sections: [],
  sort: ''
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setPagination: (state, action: PayloadAction<any>) => {
      // @ts-ignore
      state.pagination = action.payload
    },
    clearNews: state => {
      // @ts-ignore
      state.data = []
      // @ts-ignore
      state.pagination = {
        pageSize: 0,
        page: 0,
        total: 0
      }
    },
    setFilterNews: (state, action: PayloadAction<any>) => {
      state.sections = action.payload
    },
    setSortNews: (state, action: PayloadAction<string>) => {
      state.sort = action.payload
    }
  }
})

export const { setPagination, clearNews, setFilterNews, setSortNews } = newsSlice.actions

export default newsSlice.reducer
