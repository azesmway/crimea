/**
 * -----------------------------------------------------------------------
 *  Header      : AppData.tsx
 *  Created     : 18.12.2024
 *  Modified    : 18.12.2024
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description :
 * -----------------------------------------------------------------------
 */

// @flow
import { useGetCategoriesQuery } from 'api'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setAppCategories } from 'store/data'

// eslint-disable-next-line no-empty-pattern
const AppData = ({}) => {
  const { data } = useGetCategoriesQuery(null)
  const dispatch = useDispatch()

  useEffect(() => {
    if (data && data.length > 0) {
      dispatch(setAppCategories(data))
    }
  }, [data])

  return <></>
}

export default AppData
