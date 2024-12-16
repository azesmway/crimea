/**
 * -----------------------------------------------------------------------
 *  Header      : LeftBlock.tsx
 *  Created     : 14.12.2024
 *  Modified    : 14.12.2024
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description :
 * -----------------------------------------------------------------------
 */

// @flow
import { useStyles } from 'hooks'
import React from 'react'
import { Image, View } from 'react-native'
import R from 'res'
import { Images } from 'res/images.ts'

import stylesConfig from './LeftBlock.styles'

type LeftBlockProps = {}

const T = R.lang

// eslint-disable-next-line no-empty-pattern
const LeftBlock = ({}: LeftBlockProps) => {
  const styles = useStyles(stylesConfig)

  return (
    <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={Images.LogoImageSmall} style={{ width: 270, height: 140, marginBottom: 10 }} />
    </View>
  )
}

export default LeftBlock
