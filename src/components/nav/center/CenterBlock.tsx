/**
 * -----------------------------------------------------------------------
 *  Header      : CenterBlock.tsx
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
import { Text, View } from 'react-native'
import R from 'res'

import stylesConfig from './CenterBlock.styles'

type CenterBlockProps = {}

const T = R.lang

// eslint-disable-next-line no-empty-pattern
const CenterBlock = ({}: CenterBlockProps) => {
  const styles = useStyles(stylesConfig)

  return (
    <View style={{ flex: 0.6, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 38, color: '#007cc4', marginBottom: 10 }}>{'ВЕСЬ КРЫМ.РФ'}</Text>
      <Text style={{ fontWeight: 'bold', fontSize: 32, color: '#da251d', marginBottom: 10 }}>{'ИНТЕРАКТИВНАЯ КАРТА КРЫМА'}</Text>
    </View>
  )
}

export default CenterBlock
