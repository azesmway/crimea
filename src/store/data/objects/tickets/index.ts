// @flow
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ITicketsState {
  pagination: {
    pageSize: number
    page: number
    total: number
  }
  sections: any[]
  sort: string
}

const initialState: ITicketsState = {
  pagination: {
    pageSize: 0,
    page: 0,
    total: 0
  },
  sections: [],
  sort: ''
}

export const myticketsSlice = createSlice({
  name: 'mytickets',
  initialState,
  reducers: {
    setPagination: (state, action: PayloadAction<any>) => {
      // @ts-ignore
      state.pagination = action.payload
    },
    clearMyTickets: state => {
      // @ts-ignore
      state.pagination = {
        pageSize: 0,
        page: 0,
        total: 0
      }
      state.sections = []
      state.sort = ''
    },
    setFilterMyTickets: (state, action: PayloadAction<any>) => {
      state.sections = action.payload
    },
    setSortMyTickets: (state, action: PayloadAction<string>) => {
      state.sort = action.payload
    }
  }
})

export const { clearMyTickets, setPagination, setFilterMyTickets, setSortMyTickets } = myticketsSlice.actions

export default myticketsSlice.reducer
