/**
 * -----------------------------------------------------------------------
 *  Header      : MainNews.tsx
 *  Created     : 14.12.2024
 *  Modified    : 14.12.2024
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description :
 * -----------------------------------------------------------------------
 */

// @flow
import 'moment/locale/ru'

import { useNavigation } from '@react-navigation/native'
import { useGetNewsPostsQuery } from 'api'
import { useStyles } from 'hooks'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import RenderHTML from 'react-native-render-html'
import R from 'res'

import stylesConfig from './MainNews.styles'

type MainNewsProps = {}

const T = R.lang.main
const { width } = Dimensions.get('window')

// eslint-disable-next-line no-empty-pattern
const MainNews = ({}: MainNewsProps) => {
  const styles = useStyles(stylesConfig)
  const navigation = useNavigation()
  const [items, setItems] = useState<any[]>([])
  const [activeSlide, setActiveSlide] = useState<number>(0)

  const { data } = useGetNewsPostsQuery({ id: 4 })

  useEffect(() => {
    if (data && data.length > 0) {
      setItems(data)
    }
  }, [data])

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: 180, alignItems: 'center' }}>
          <Image source={{ uri: item.fimg_url }} style={{ width: 150, height: 150, borderRadius: 10 }} resizeMode={'cover'} />
        </View>
        <View style={{ width: 270 }}>
          <Text style={{ fontWeight: 'bold' }}>{item.title.rendered}</Text>
          <RenderHTML contentWidth={270} source={{ html: item.excerpt.rendered.replace(/(?:\r\n|\r|\n|\t)/g, '') }} />
          <View style={{ width: '100%', flexDirection: 'row', position: 'absolute', right: 0, left: 0, bottom: 26 }}>
            <View style={{ width: '50%', alignItems: 'flex-start' }}>
              <Text style={{ fontSize: 12, color: '#858585' }}>{moment(item.date).format('ll')}</Text>
            </View>
            <View style={{ width: '50%', alignItems: 'flex-end', paddingRight: 10 }}>
              <TouchableOpacity
                onPress={() => {
                  // @ts-ignore
                  navigation.navigate(R.routes.ARTICLE_NEWS, { id: item.id })
                }}>
                <Text style={{ fontSize: 14, color: '#007cc4' }}>{'Далее...'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }

  const keyExtractor = (item: any) => String(item.id)

  return (
    <View
      // @ts-ignore
      style={styles.container}>
      <FlatList data={items} renderItem={renderItem} horizontal={true} keyExtractor={keyExtractor} showsHorizontalScrollIndicator={false} />
    </View>
  )
}

export default MainNews