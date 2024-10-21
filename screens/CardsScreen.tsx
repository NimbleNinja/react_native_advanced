import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Cards } from '../components/Cards'
import { Card as CardType } from '../types/types'
import { Card } from '@rneui/themed'
import { RootStackScreenProps } from '../types/navigation'

const DATA: CardType[] = [
  {
    id: 1,
    text: 'Card #1',
    uri: 'https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/https://builtin.com/sites/www.builtin.com/files/2024-05/simcard.jpg'
  },
  {
    id: 2,
    text: 'Card #2',
    uri: 'https://www.thebalancemoney.com/thmb/At8Phg5iioy6iKbid9EeDAKJFDc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/credit-card-664122404-5aa02284c673350037bce86d.jpg'
  },
  { id: 3, text: 'Card #3', uri: 'https://www.collinsdictionary.com/images/full/card_199913294.jpg' },
  {
    id: 4,
    text: 'Card #4',
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVXS7JLcFiK-M3DehHSX2uLTcbXyPWsM5xQA&s'
  },
  { id: 5, text: 'Card #5', uri: 'https://www.collinsdictionary.com/images/full/card_199913294.jpg' },
  {
    id: 6,
    text: 'Card #6',
    uri: 'https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/https://builtin.com/sites/www.builtin.com/files/2024-05/simcard.jpg'
  },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  {
    id: 8,
    text: 'Card #8',
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVXS7JLcFiK-M3DehHSX2uLTcbXyPWsM5xQA&s'
  }
]

export const CardsScreen: React.FC<RootStackScreenProps<'Cards'>> = () => {
  const renderCard = (card: CardType) => {
    return (
      <Card key={card.id}>
        <Card.Title>{card.text}</Card.Title>
        <Card.Image source={{ uri: card.uri }} />
      </Card>
    )
  }

  return (
    <View style={styles.container}>
      <Cards data={DATA} renderCard={renderCard} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
