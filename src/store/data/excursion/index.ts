// @flow
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IIds {
  id: any | null
  calendarId: any | null
}

interface IId {
  id: any | null
}

interface IExcursionData {
  excursion: IIds[]
}

const initialState: IExcursionData = {
  excursion: []
}

export const excursionSlice = createSlice({
  name: 'excursion',
  initialState,
  reducers: {
    setExcursionIds: (state, action: PayloadAction<IIds>) => {
      state.excursion.push(action.payload)
    },
    removeExcursionId: (state, action: PayloadAction<IId>) => {
      state.excursion = state.excursion.filter(id => id.id !== action.payload)
    },
    removeAllExcursionIds: (state, action: PayloadAction<[]>) => {
      state.excursion = []
    }
  }
})

// Action creators are generated for each case reducer function
export const { setExcursionIds, removeExcursionId, removeAllExcursionIds } = excursionSlice.actions

export default excursionSlice.reducer
