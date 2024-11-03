import React, { useMemo, useRef, useState } from 'react';
import { Card as CardType } from '../types/types';
import {
  Animated,
  LayoutAnimation,
  PanResponder,
  StyleSheet,
  View,
  useWindowDimensions
} from 'react-native';
import { Card } from '@rneui/themed';

type Props = {
  data: CardType[];
  renderCard: (item: CardType) => React.JSX.Element;
};

export const Cards: React.FC<Props> = ({ renderCard, data }) => {
  const [cards, setCards] = useState(data);
  const { width } = useWindowDimensions();
  const size = useMemo(
    () => ({
      screenWidth: width,
      gestureWidth: width * 0.25,
      rotateWidth: width * 0.75
    }),
    [width]
  );

  const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: position.x }], {
        useNativeDriver: false
      }),
      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.dx > size.gestureWidth) {
          Animated.timing(position, {
            useNativeDriver: false,
            toValue: { x: size.screenWidth, y: 0 },
            duration: 500
          }).start(() => onCompleteSwipe());
        } else if (gestureState.dx < -size.gestureWidth) {
          Animated.timing(position, {
            useNativeDriver: false,
            toValue: { x: -size.screenWidth, y: 0 },
            duration: 500
          }).start(() => onCompleteSwipe());
        } else {
          Animated.spring(position, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false
          }).start();
        }
      }
    })
  ).current;

  const onCompleteSwipe = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    setCards((prev) => {
      return prev.slice(1);
    });
    position.setValue({ x: 0, y: 0 });
  };

  const rotate = position.x.interpolate({
    inputRange: [-size.rotateWidth, 0, size.rotateWidth],
    outputRange: ['-45deg', '0deg', '45deg']
  });

  const renderCards = () => {
    if (!cards.length) {
      return (
        <Card>
          <Card.Title>No items</Card.Title>
        </Card>
      );
    }

    return cards
      .map((card, index) => {
        if (index === 0) {
          return (
            <Animated.View
              {...panResponder.panHandlers}
              style={[
                styles.card,
                { transform: [{ translateX: position.x }, { rotateZ: rotate }] }
              ]}
              key={card.id}
            >
              {renderCard(card)}
            </Animated.View>
          );
        }
        return (
          <Animated.View
            key={card.id}
            style={[styles.card, { top: 15 * index }]}
          >
            {renderCard(card)}
          </Animated.View>
        );
      })
      .reverse();
  };

  return <View>{renderCards()}</View>;
};

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    left: 0,
    right: 0
  }
});
