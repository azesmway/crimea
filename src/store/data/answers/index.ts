// @flow
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IPayLoad {
  id: any
  data?: any
  answer?: any
  finish?: boolean
  duration?: number
  answerStart?: boolean
}

interface INavState {
  data: any
}

const initialState: INavState = {
  data: {}
}

export const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    setAnswers: (state, action: PayloadAction<IPayLoad>) => {
      let data = state.data

      if (!state.data[action.payload.id]) {
        let answer = action.payload.data

        if (action.payload.answer) {
          answer = { ...answer, answer: action.payload.answer || [] }
        }

        data = {
          ...data,
          [action.payload.id]: answer
        }
      } else if (action.payload.answerStart) {
        data[action.payload.id].dateStart = new Date().toISOString()
        data[action.payload.id].dateFinish = null
        data[action.payload.id].finishOrNot = false
        data[action.payload.id].answer = []
      } else if (action.payload.answer) {
        const arr = Object.assign([], data[action.payload.id].answer)
        arr.push(action.payload.answer)
        data[action.payload.id].answer = arr
      } else if (action.payload.finish) {
        data[action.payload.id].finishOrNot = true
        data[action.payload.id].dateFinish = new Date().toISOString()
      } else if (action.payload.duration) {
        data[action.payload.id].duration = action.payload.duration
      } else {
        data[action.payload.id] = action.payload.data
      }

      state.data = data
    }
  }
})

// Action creators are generated for each case reducer function
export const { setAnswers } = answersSlice.actions

export default answersSlice.reducer
