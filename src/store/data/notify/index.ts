// @flow
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface INavState {
  badge: number
  notification: any | null
}

const initialState: INavState = {
  badge: 0,
  notification: null
}

export const notifySlice = createSlice({
  name: 'notify',
  initialState,
  reducers: {
    setBadge: (state, action: PayloadAction<number>) => {
      state.badge = action.payload
    },
    setNotify: (state, action: PayloadAction<any>) => {
      state.notification = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setBadge, setNotify } = notifySlice.actions

export default notifySlice.reducer
