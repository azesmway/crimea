// @flow
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser, IUsersTokens } from 'types/user'

export interface IUserState {
  data: IUser | null
  token: string | null
  refreshToken: string | null
  isRefreshToken: boolean
  deviceId: string | null
  device: IUsersTokens
}

const initialState: IUserState = {
  data: null,
  token: null,
  refreshToken: null,
  isRefreshToken: false,
  deviceId: null,
  device: {
    sendingSelectionObject: false,
    sendingSingleObject: false,
    sendingObjectNearby: false
  }
}

export const personSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser | null>) => {
      state.data = action.payload
    },
    setTokent: (state, action: PayloadAction<{ token: string; refreshToken: string }>) => {
      state.token = action.payload.token
      state.refreshToken = action.payload.refreshToken
    },
    setRefreshToken: (state, action: PayloadAction<boolean>) => {
      state.isRefreshToken = action.payload
    },
    setDeviceTokens: (state, action: PayloadAction<IUsersTokens>) => {
      state.device = action.payload
    },
    setDeviceId: (state, action: PayloadAction<string>) => {
      state.deviceId = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUser, setTokent, setRefreshToken, setDeviceTokens, setDeviceId } = personSlice.actions

export default personSlice.reducer
