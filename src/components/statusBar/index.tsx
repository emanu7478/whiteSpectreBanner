import React from 'react';
import { StatusBar } from 'react-native';
import * as colors from '../../constants/colors';

function RNStatusBar() {
  return <StatusBar backgroundColor={colors.white} barStyle="dark-content" />;
}

export default RNStatusBar;
