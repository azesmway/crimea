/**
 * -----------------------------------------------------------------------
 *  Header      : FooterBlock.tsx
 *  Created     : 18.12.2024
 *  Modified    : 18.12.2024
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description :
 * -----------------------------------------------------------------------
 */

// @flow
import { useStyles } from 'hooks'
import React from 'react'
import { Text, View } from 'react-native'
import R from 'res'

import stylesConfig from './FooterBlock.styles'

type FooterBlockProps = {}

const T = R.lang

// eslint-disable-next-line no-empty-pattern
const FooterBlock = ({}: FooterBlockProps) => {
  const styles = useStyles(stylesConfig)

  return (
    <View style={{ width: '100%', backgroundColor: '#fff', height: 400 }}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: '40%', padding: 40 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{'Проект "ВЕСЬ КРЫМ"'}</Text>
        </View>
        <View style={{ width: '20%', padding: 40 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{'Про нас'}</Text>
          <View style={{ marginTop: 40 }}>
            <Text style={{ marginTop: 20, fontSize: 16 }}>{'Наша команда'}</Text>
            <Text style={{ marginTop: 20, fontSize: 16 }}>{'История проекта'}</Text>
            <Text style={{ marginTop: 20, fontSize: 16 }}>{'Благотворительность'}</Text>
          </View>
        </View>
        <View style={{ width: '20%', padding: 40 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{'Политика конфиденциальности'}</Text>
          <View style={{ marginTop: 18 }}>
            <Text style={{ marginTop: 20, fontSize: 16 }}>{'Политика конфиденциальности'}</Text>
            <Text style={{ marginTop: 20, fontSize: 16 }}>{'Условия и положения'}</Text>
            <Text style={{ marginTop: 20, fontSize: 16 }}>{'Связаться с нами'}</Text>
          </View>
        </View>
        <View style={{ width: '20%', padding: 40 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{'Соц.сети'}</Text>
          <View style={{ marginTop: 40 }}>
            <Text style={{ marginTop: 20, fontSize: 16 }}>{'ВКонтакте'}</Text>
            <Text style={{ marginTop: 20, fontSize: 16 }}>{'Telegram'}</Text>
          </View>
        </View>
      </View>
      <View style={{ paddingLeft: 40 }}>
        <Text>{'© ВЕСЬ КРЫМ, 2024'}</Text>
      </View>
    </View>
  )
}

export default FooterBlock
