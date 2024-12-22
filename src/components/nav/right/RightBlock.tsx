/**
 * -----------------------------------------------------------------------
 *  Header      : RightBlock.tsx
 *  Created     : 15.12.2024
 *  Modified    : 15.12.2024
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description :
 * -----------------------------------------------------------------------
 */

// @flow
import { useStyles } from 'hooks'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { Menu } from 'react-native-paper'
import { useSelector } from 'react-redux'
import R from 'res'
import { CATEGORIES_MAIN } from 'res/const'
import { RootState } from 'store'

import stylesConfig from './RightBlock.styles'

type RightBlockProps = {}

const T = R.lang

// eslint-disable-next-line no-empty-pattern
const RightBlock = ({}: RightBlockProps) => {
  const styles = useStyles(stylesConfig)
  const categories = useSelector((state: RootState) => state.app.categories)
  const [screenSize, setScreenSize] = useState({ width: Dimensions.get('window').width, height: Dimensions.get('window').height })
  const [visible, setVisible] = useState(false)
  const [items, setItems] = useState<any[]>([])

  useEffect(() => {
    if (categories) {
      const cats = categories.filter((c: any) => CATEGORIES_MAIN.indexOf(c.id) !== -1)

      if (cats && cats.length > 0) {
        const sortCats: any[] = []

        for (let j = 0; j < CATEGORIES_MAIN.length; j++) {
          for (let i = 0; i < cats.length; i++) {
            if (CATEGORIES_MAIN[j] === cats[i].id) {
              sortCats.push(cats[i])
            }
          }
        }
        setItems(sortCats)
      }
    }
  }, [categories])

  const updateDimensions = () => {
    // @ts-ignore
    setScreenSize({ width: window.innerWidth, height: window.innerHeight })
  }

  useEffect(() => {
    // @ts-ignore
    window.addEventListener('resize', updateDimensions)

    // @ts-ignore
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const openMenu = () => setVisible(true)
  const closeMenu = () => setVisible(false)

  if (!categories || categories.length === 0) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', paddingRight: 10 }}>
        <ActivityIndicator />
      </View>
    )
  }

  if (screenSize.width < 780) {
    return (
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        mode={'elevated'}
        contentStyle={{ backgroundColor: '#fff' }}
        style={{ backgroundColor: '#fff', marginTop: 32, paddingRight: 5 }}
        anchor={
          <TouchableOpacity onPress={openMenu} style={{ width: 50, height: '100%' }}>
            <Icon name={'menu'} color={'#0067a3'} size={34} />
          </TouchableOpacity>
        }>
        {items.map((item: any, index: number) => {
          return <Menu.Item key={String(index)} onPress={() => {}} title={item.name} titleStyle={styles.titleMenu} />
        })}
      </Menu>
    )
  }

  if (screenSize.width < 1200) {
    return (
      <View style={{ alignItems: 'flex-end', justifyContent: 'center', paddingRight: 10 }}>
        <View style={{ alignItems: 'flex-end', flexDirection: 'row' }}>
          {items.map((item: any, index: number) => {
            if (index < 4 && index !== 3) {
              return (
                <TouchableOpacity key={String(index)} onPress={() => {}} style={{ paddingVertical: 3 }}>
                  <Text style={styles.menu}>{item.name + ' | '}</Text>
                </TouchableOpacity>
              )
            } else if (index < 4) {
              return (
                <TouchableOpacity key={String(index)} onPress={() => {}} style={{ paddingVertical: 3 }}>
                  <Text style={styles.menu}>{item.name}</Text>
                </TouchableOpacity>
              )
            }
          })}
        </View>
        <View style={{ alignItems: 'flex-end', flexDirection: 'row' }}>
          {items.map((item: any, index: number) => {
            if (index > 3 && index !== 5) {
              return (
                <TouchableOpacity key={String(index)} onPress={() => {}} style={{ paddingVertical: 3 }}>
                  <Text style={styles.menu}>{item.name + ' | '}</Text>
                </TouchableOpacity>
              )
            } else if (index > 3) {
              return (
                <TouchableOpacity key={String(index)} onPress={() => {}} style={{ paddingVertical: 3 }}>
                  <Text style={styles.menu}>{item.name}</Text>
                </TouchableOpacity>
              )
            }
          })}
        </View>
      </View>
    )
  }

  return (
    <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
      <View style={{ alignItems: 'flex-end', flexDirection: 'row' }}>
        {items.map((item: any, index: number) => {
          if (index !== items.length - 1) {
            return (
              <TouchableOpacity key={String(index)} onPress={() => {}} style={{ paddingVertical: 3 }}>
                <Text style={styles.menu}>{item.name + ' | '}</Text>
              </TouchableOpacity>
            )
          } else {
            return (
              <TouchableOpacity key={String(index)} onPress={() => {}} style={{ paddingVertical: 3 }}>
                <Text style={styles.menu}>{item.name}</Text>
              </TouchableOpacity>
            )
          }
        })}
        <View style={{ width: 10 }} />
      </View>
    </View>
  )
}

export default RightBlock
