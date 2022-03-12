// LIBRARY IMPORTS
import React, { useRef } from 'react';
import { Animated, StyleProp, Text, TextStyle, TouchableWithoutFeedback } from 'react-native';

// STYLE
import style from './style';

interface ITextButton {
  title: string;
  onPress(): void;
  titleStyle: StyleProp<TextStyle>;
  disabled: boolean;
}

function TextButton({ title, onPress, titleStyle, disabled = false }: ITextButton) {
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
    <TouchableWithoutFeedback disabled={disabled} onPressIn={onPressIn} onPressOut={onPressOut} onPress={onPress}>
      <Animated.View style={{ transform: [{ scale: scaling }] }}>
        <Text style={[style.title, titleStyle]}>{title}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

export default TextButton;
