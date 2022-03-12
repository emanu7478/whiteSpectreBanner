import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import * as Screens from '../routes';

const Stack = createStackNavigator();

// Screens Stack
const PrivateScreensStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        headerShown: false,
        headerMode: 'screen',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="Home" component={Screens.Home} />
    </Stack.Navigator>
  );
};

export default PrivateScreensStack;
