import { useNavigation, useRoute } from '@react-navigation/native'
import { Brandon, Card, Question } from 'assets/data/cards'
import { CardsBlack, iconCloseWhite, IconMenu } from 'assets/icons'
import { QuizCard } from 'components'
import * as React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import { DetailsHeaderScrollView } from 'react-native-sticky-parallax-header'

import { cardScreenTestIDs } from './testIDs'

const CardScreen: React.FC = () => {
  const navigation = useNavigation()
  const route = useRoute()
  // @ts-ignore
  const user = route.params?.user ?? Brandon

  function goBack() {
    navigation.goBack()
  }

  return (
    <>
      <DetailsHeaderScrollView
        title={user.author}
        titleStyle={screenStyles.text}
        titleTestID={cardScreenTestIDs.headerTitle}
        leftTopIcon={iconCloseWhite}
        leftTopIconOnPress={goBack}
        leftTopIconTestID={cardScreenTestIDs.headerLeftTopIcon}
        rightTopIcon={IconMenu}
        rightTopIconTestID={cardScreenTestIDs.headerRightTopIcon}
        tag={user.type}
        tagTestID={cardScreenTestIDs.headerTag}
        containerStyle={screenStyles.stretchContainer}
        backgroundColor={user.color}
        image={user.image}
        contentIcon={CardsBlack}
        contentIconNumber={10}
        contentIconNumberTestID={cardScreenTestIDs.headerContentIconNumber}>
        <View style={screenStyles.content}>
          {user.cards.map(
            (
              data:
                | {
                    cards: Card[]
                    number: string
                    question: string
                    value: boolean
                    revealed: boolean
                    picked: boolean
                  }
                | Question,
              i: number,
              arr: string | any[]
            ) => (
              <QuizCard data={data} num={i} key={data.question} cardsAmount={arr.length} />
            )
          )}
        </View>
      </DetailsHeaderScrollView>
      <StatusBar barStyle="light-content" backgroundColor={user.color} translucent />
    </>
  )
}

const screenStyles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginBottom: 25
  },
  contentText: {
    alignSelf: 'flex-start',
    color: '#000',
    fontFamily: 'AvertaStd-Semibold',
    fontSize: 24,
    letterSpacing: -0.2,
    lineHeight: 28,
    paddingBottom: 20,
    paddingTop: 40
  },
  darkBackground: {
    backgroundColor: '#000'
  },
  lightBackground: {
    backgroundColor: '#fff'
  },
  screenContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center'
  },
  stretch: {
    alignSelf: 'stretch'
  },
  stretchContainer: {
    alignSelf: 'stretch',
    flex: 1
  },
  text: {
    fontFamily: 'AvertaStd-Regular'
  }
})

export default CardScreen
