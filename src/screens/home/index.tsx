import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import Banner from '../../components/banner';
import RNStatusBar from '../../components/statusBar';

import style from './style';

const Home: FunctionComponent = () => {
  return (
    <View style={style.container}>
      <RNStatusBar />
      <Banner />
    </View>
  );
};

export default Home;
