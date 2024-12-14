// @flow
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IQuestsState {
  pagination: {
    pageSize: number
    page: number
    total: number
  }
  sections: any[]
  sort: string
}

const initialState: IQuestsState = {
  pagination: {
    pageSize: 0,
    page: 0,
    total: 0
  },
  sections: [],
  sort: ''
}

export const questsSlice = createSlice({
  name: 'quests',
  initialState,
  reducers: {
    setPagination: (state, action: PayloadAction<any>) => {
      // @ts-ignore
      state.pagination = action.payload
    },
    clearQuests: state => {
      // @ts-ignore
      state.data = []
      // @ts-ignore
      state.pagination = {
        pageSize: 0,
        page: 0,
        total: 0
      }
    },
    setFilterQuests: (state, action: PayloadAction<any>) => {
      state.sections = action.payload
    },
    setSortQuests: (state, action: PayloadAction<string>) => {
      state.sort = action.payload
    }
  }
})

export const { setPagination, clearQuests, setFilterQuests, setSortQuests } = questsSlice.actions

export default questsSlice.reducer
