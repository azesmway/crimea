import React, { useEffect, useState } from 'react'
import { Dimensions, View } from 'react-native'
import RenderHTML from 'react-native-render-html'

const { width, height } = Dimensions.get('window')

const WPAPI = require('wpapi')
const wp = new WPAPI({ endpoint: 'https://xn--b1agpite6ef.xn--p1ai/wp-json' })

const App = () => {
  const [html, setHtml] = useState('')

  useEffect(() => {
    wp.posts()
      .embed()
      .then(function (data: any) {
        setHtml(data[0].content.rendered)
      })
  }, [])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <RenderHTML contentWidth={width < height ? width * 0.92 : width * 0.3} source={{ html: html.replace(/(?:\r\n|\r|\n|\t)/g, '') }} />
    </View>
  )
}

export default App
