import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL_API } from 'res/const'
import { ENDPOINT_URL_API, ENDPOINT_URL_POSTS, ENDPOINTS_MAIN_URL } from 'res/endpoints'

const WPAPI = require('wpapi')
const wp = new WPAPI({ endpoint: ENDPOINTS_MAIN_URL })

export const mainApi = createApi({
  reducerPath: 'mainApi',
  tagTypes: ['Main'],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL_API + ENDPOINT_URL_API
  }),
  endpoints: builder => ({
    getNewsPosts: builder.query<any, any>({
      // @ts-ignore
      queryFn: async ({ id }) => {
        try {
          const data = await wp.posts().categories(id).perPage(20).embed()

          return { data }
        } catch (error) {
          // Catch any errors and return them as an object with an `error` field
          return { error }
        }
      },
      transformResponse: (response: any, meta: any, arg: any) => {
        return response
      }
    }),
    getNewsPostsByID: builder.query<any, any>({
      // @ts-ignore
      queryFn: async ({ id }) => {
        try {
          const data = await wp.posts().id(id).embed()

          return { data }
        } catch (error) {
          // Catch any errors and return them as an object with an `error` field
          return { error }
        }
      },
      transformResponse: (response: any, meta: any, arg: any) => {
        return response
      }
    })
  })
})

export const { useGetNewsPostsQuery, useGetNewsPostsByIDQuery } = mainApi
