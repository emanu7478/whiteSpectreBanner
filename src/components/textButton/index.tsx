import React, { useRef } from 'react';
import { Animated, StyleProp, Text, TextStyle, TouchableWithoutFeedback } from 'react-native';

import style from './style';

interface TextButtonProps {
  title: string;
  onPress(): void;
  titleStyle: StyleProp<TextStyle>;
}

function TextButton({ title, onPress, titleStyle }: TextButtonProps) {
  const scaling = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.spring(scaling, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaling, {
      toValue: 1,
      friction: 3,
      tension: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableWithoutFeedback onPressIn={onPressIn} onPressOut={onPressOut} onPress={onPress}>
      <Animated.View style={{ transform: [{ scale: scaling }] }}>
        <Text style={[style.title, titleStyle]}>{title}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

export default TextButton;
