// @flow
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISearchResult } from 'types/objects/search'

export interface ISearchState {
  text: string
  textMain: string
  selected: ISearchResult[] | []
  object: string
}

const initialState: ISearchState = {
  text: '',
  textMain: '',
  selected: [],
  object: ''
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    },
    setSearchMain: (state, action: PayloadAction<string>) => {
      state.textMain = action.payload
    },
    setSelected: (state, action: PayloadAction<ISearchResult>) => {
      // @ts-ignore
      state.selected.push(action.payload)
    },
    setSearchObject: (state, action: PayloadAction<string>) => {
      state.object = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setSearch, setSelected, setSearchMain, setSearchObject } = searchSlice.actions

export default searchSlice.reducer
