/**
 * -----------------------------------------------------------------------
 *  Header      : MainTourism.tsx
 *  Created     : 18.12.2024
 *  Modified    : 18.12.2024
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description :
 * -----------------------------------------------------------------------
 */

// @flow
import { useGetPostsQuery } from 'api'
import { useStyles } from 'hooks'
import React, { useEffect, useState } from 'react'
import { FlatList, Image, Pressable, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import RenderHTML from 'react-native-render-html'
import { s } from 'react-native-size-matters'
import R from 'res'

import stylesConfig from './MainTourism.styles'

type MainTourismProps = {}

const T = R.lang

// eslint-disable-next-line no-empty-pattern
const MainTourism = ({}: MainTourismProps) => {
  const styles = useStyles(stylesConfig)
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions()
  const [items, setItems] = useState<any[]>([])

  const { data } = useGetPostsQuery({ id: 41 })

  useEffect(() => {
    if (data && data.length > 0) {
      setItems(data)
    }
  }, [data])

  const tagsStyles = {
    body: {
      color: '#fff'
    },
    p: {
      color: '#fff'
    }
  }

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <TouchableOpacity style={{ width: SCREEN_WIDTH < 540 ? 340 : 280, marginHorizontal: s(SCREEN_WIDTH < 540 ? 5 : 20) }} onPress={() => {}}>
        <View
          style={{
            // width: 280,
            minHeight: 340,
            alignItems: 'center',
            // marginHorizontal: s(20),
            marginBottom: s(10),
            paddingTop: s(5),
            borderWidth: 0.1,
            borderColor: '#ccc',
            borderRadius: s(5),
            shadowColor: '#959595',
            shadowOffset: {
              width: 0,
              height: 3
            },
            shadowOpacity: 0.2,
            shadowRadius: 5.51,

            elevation: 5
          }}>
          <Image source={{ uri: item.fimg_url }} style={{ width: 200, height: 150, borderRadius: 10 }} resizeMode={'cover'} />
          <Text style={{ width: 220, fontWeight: 'bold', marginTop: 5, fontSize: 16, color: '#fff' }}>{item.title.rendered.replace('&amp;', '&')}</Text>
          <View style={{ paddingHorizontal: 10 }}>
            <RenderHTML source={{ html: item.excerpt.rendered.replace(/(?:\r\n|\r|\n|\t)/g, '') }} tagsStyles={tagsStyles} />
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  const keyExtractor = (item: any) => String(item.id)

  if (SCREEN_WIDTH < 540) {
    return (
      <View
        // @ts-ignore
        style={styles.container}>
        <FlatList data={items} renderItem={renderItem} keyExtractor={keyExtractor} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} />
      </View>
    )
  } else {
    return (
      <View
        // @ts-ignore
        style={styles.container}>
        <FlatList data={items} renderItem={renderItem} numColumns={4} keyExtractor={keyExtractor} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} />
      </View>
    )
  }
}

export default MainTourism
