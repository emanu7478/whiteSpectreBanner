// LIBRARY IMPORTS
import React from 'react';
import { View } from 'react-native';
import { UIActivityIndicator } from 'react-native-indicators';

// STYLE
import * as colors from '../../constants/colors';
import style from './style';

function Loader() {
  return (
    <View style={style.container}>
      <UIActivityIndicator size={25} color={colors.black} />
    </View>
  );
}

export default Loader;
