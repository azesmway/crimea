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
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import R from 'res'

import stylesConfig from './RightBlock.styles'

type RightBlockProps = {}

const T = R.lang

// eslint-disable-next-line no-empty-pattern
const RightBlock = ({}: RightBlockProps) => {
  const styles = useStyles(stylesConfig)

  return (
    <View style={{ flex: 0.2, alignItems: 'flex-end', justifyContent: 'center', paddingRight: 30 }}>
      <View style={{ marginBottom: 10, alignItems: 'flex-end' }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 3 }}>
          <Text style={styles.menu}>{'ГЛАВНАЯ'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 3 }}>
          <Text style={styles.menu}>{'ГОРОДА КРЫМА'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 3 }}>
          <Text style={styles.menu}>{'НОВОСТИ КРЫМА'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 3 }}>
          <Text style={styles.menu}>{'ГОСТИНИЦЫ'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 3 }}>
          <Text style={styles.menu}>{'РЕСТОРАНЫ'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 3 }}>
          <Text style={styles.menu}>{'ТУРЫ'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default RightBlock
