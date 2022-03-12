// LIBRARY IMPORTS
import React from 'react';
import { Animated } from 'react-native';

// STYLE
import style from './style';

interface IActiveIndicator {
  translateX: Animated.Value;
  scaleX: Animated.Value;
}

function BannerActiveIndicator({ translateX, scaleX }: IActiveIndicator) {
  return (
    <Animated.View
      style={[
        style.container,
        {
          transform: [{ translateX: translateX }, { scaleX: scaleX }],
        },
      ]}
    />
  );
}

export default BannerActiveIndicator;
