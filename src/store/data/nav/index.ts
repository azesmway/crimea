// @flow
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { isArray } from 'lodash'

export interface INavState {
  names: string[]
  params: any[]
  isCanBack: boolean
  deepLink: string
}

const initialState: INavState = {
  names: [],
  params: [],
  isCanBack: false,
  deepLink: ''
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setNavName: (state, action: PayloadAction<string>) => {
      const nav = state && state.names && isArray(state.names) ? Object.assign([], state.names) : []
      // @ts-ignore
      nav.push(action.payload)
      state.names = nav
    },
    setNavParams: (state, action: PayloadAction<any>) => {
      const nav = state && state.params && isArray(state.params) ? Object.assign([], state.params) : []
      // @ts-ignore
      nav.push(action.payload)
      state.params = nav
    },
    setNavCanBack: (state, action: PayloadAction<boolean>) => {
      state.isCanBack = action.payload
    },
    setNavDeepLink: (state, action: PayloadAction<string>) => {
      state.deepLink = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setNavName, setNavParams, setNavCanBack, setNavDeepLink } = navSlice.actions

export default navSlice.reducer
