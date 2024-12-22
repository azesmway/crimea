import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IApp {
  categories: any[]
}

const initialState: IApp = {
  categories: []
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppCategories: (state, action: PayloadAction<any[]>) => {
      state.categories = action.payload
    }
  }
})

export const { setAppCategories } = appSlice.actions

export default appSlice.reducer
