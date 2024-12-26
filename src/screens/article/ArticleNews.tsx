/**
 * -----------------------------------------------------------------------
 *  Header      : ArticleNews.tsx
 *  Created     : 15.12.2024
 *  Modified    : 15.12.2024
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description :
 * -----------------------------------------------------------------------
 */

// @flow
import { useRoute } from '@react-navigation/native'
import { useGetPostsByIDQuery } from 'api'
import Wrapper from 'components/ui/wrapper'
import { useStyles } from 'hooks'
import React from 'react'
import { ActivityIndicator, ScrollView, Text, View } from 'react-native'
import RenderHTML from 'react-native-render-html'
import R from 'res'

import stylesConfig from './ArticleNews.styles'

type ArticleNewsProps = {}

const T = R.lang

// eslint-disable-next-line no-empty-pattern
const ArticleNews = ({}: ArticleNewsProps) => {
  const styles = useStyles(stylesConfig)
  const route = useRoute()
  // @ts-ignore
  const { id } = route.params
  const { data } = useGetPostsByIDQuery({ id })

  if (!data) {
    return (
      <Wrapper>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <View>
          <RenderHTML contentWidth={270} source={{ html: data.content.rendered.replace(/(?:\r\n|\r|\n|\t)/g, '') }} />
        </View>
      </ScrollView>
    </Wrapper>
  )
}

export default ArticleNews
