import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IPayload {
  id: any
  data: any
  finished?: boolean
  clear?: boolean
}

interface IRoute {
  routes: any
}

const initialState: IRoute = {
  routes: {}
}

export const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    setRouteData: (state, action: PayloadAction<IPayload>) => {
      let routes = state.routes

      if (!state.routes[action.payload.id]) {
        routes = {
          ...routes,
          [action.payload.id]: [action.payload.data]
        }
      } else if (action.payload.finished) {
        const arr = Object.assign([], routes[action.payload.id])

        for (let i = 0; i < arr.length; i++) {
          arr[i].passed = true
        }

        arr.push(action.payload.data)
        routes[action.payload.id] = arr
      } else if (action.payload.clear) {
        routes[action.payload.id] = []
      } else {
        const arr = Object.assign([], routes[action.payload.id])

        for (let i = 0; i < arr.length; i++) {
          arr[i].passed = true
        }

        arr.push(action.payload.data)
        routes[action.payload.id] = arr
      }

      state.routes = routes
    }
  }
})

// Action creators are generated for each case reducer function
export const { setRouteData } = routeSlice.actions

export default routeSlice.reducer
