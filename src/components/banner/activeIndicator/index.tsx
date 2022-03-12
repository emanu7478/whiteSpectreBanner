import React from 'react';
import { Animated } from 'react-native';

import style from './style';

interface ActiveIndicatorProps {
  translateX: Animated.Value;
  scaleX: Animated.Value;
}

function ActiveIndicator({ translateX, scaleX }: ActiveIndicatorProps) {
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

export default ActiveIndicator;
