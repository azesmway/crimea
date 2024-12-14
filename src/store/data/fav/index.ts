// @flow
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IFavState {
  ids: number[]
  sections: any[]
  sort: string
}

const initialState: IFavState = {
  ids: [],
  sections: [],
  sort: ''
}

export const favSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    setIdsFav: (state, action: PayloadAction<number[]>) => {
      state.ids = action.payload
    },
    setFilterFav: (state, action: PayloadAction<any>) => {
      state.sections = action.payload
    },
    setSortFav: (state, action: PayloadAction<string>) => {
      state.sort = action.payload
    }
  }
})

export const { setFilterFav, setSortFav, setIdsFav } = favSlice.actions

export default favSlice.reducer
