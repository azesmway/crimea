import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IMap } from 'types/app'

const initialState: IMap = {
  data: [],
  isLoaded: false,
  sections: [],
  filter: []
}

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setMapData: (state, action: PayloadAction<any[]>) => {
      state.data = action.payload
    },
    setLoadedMapData: (state, action: PayloadAction<boolean>) => {
      state.isLoaded = action.payload
    },
    setFilterMap: (state, action: PayloadAction<any>) => {
      state.sections = action.payload
    },
    setFilterMapObjects: (state, action: PayloadAction<any>) => {
      state.filter = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setMapData, setLoadedMapData, setFilterMap, setFilterMapObjects } = mapSlice.actions

export default mapSlice.reducer
