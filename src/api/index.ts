import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL_API } from 'res/const'
import { ENDPOINT_URL_API, ENDPOINT_URL_POSTS, ENDPOINTS_MAIN_URL } from 'res/endpoints'

const WPAPI = require('wpapi')
const wp = new WPAPI({ endpoint: ENDPOINTS_MAIN_URL })

export const appApi = createApi({
  reducerPath: 'appApi',
  tagTypes: ['App'],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL_API + ENDPOINT_URL_API
  }),
  endpoints: builder => ({
    getPosts: builder.query<any, any>({
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
    getPostsByID: builder.query<any, any>({
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
    }),
    getCategories: builder.query<any, any>({
      // @ts-ignore
      queryFn: async () => {
        try {
          const _ = require('lodash')
          const getAll = (request: any) => {
            return request.then(function (response: any) {
              if (!response._paging || !response._paging.next) {
                return response
              }

              return Promise.all([response, getAll(response._paging.next)]).then(function (responses) {
                return _.flatten(responses)
              })
            })
          }

          const data = await getAll(wp.categories())

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

export const { useGetPostsQuery, useGetPostsByIDQuery, useGetCategoriesQuery } = appApi
