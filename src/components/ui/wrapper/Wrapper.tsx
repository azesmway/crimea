/**
 * -----------------------------------------------------------------------
 *  Header      : Wrapper.tsx
 *  Created     : 14.12.2024
 *  Modified    : 14.12.2024
 *  Author      : Alexey Zolotarеv
 *  E-mail      : azesm@me.com
 *  Description :
 * -----------------------------------------------------------------------
 */

// @flow
import CenterBlock from 'components/nav/center'
import LeftBlock from 'components/nav/left'
import RightBlock from 'components/nav/right'
import { useColors, useStyles } from 'hooks'
import React from 'react'
import {ImageBackground, View, Image, Dimensions} from 'react-native';
import R from 'res'
import { Images } from 'res/images'

import stylesConfig from './Wrapper.styles'

type WrapperProps = {
  children: any
}

const T = R.lang.main

const Wrapper = ({ children }: WrapperProps) => {
  const styles = useStyles(stylesConfig)
  const colors = useColors()

  return (
    <>
      <View
        // source={Images.BgHeaderImage}
        style={{
          height: 180
        }}>
        <View style={{ flexDirection: 'row', width: '100%', height: '100%', shadowColor: '#959595' }}>
          <LeftBlock />
          <CenterBlock />
          <RightBlock />
        </View>
      </View>
      {children}
    </>
  )
}

export default Wrapper
