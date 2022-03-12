// LIBRARY IMPORTS
import React, { FunctionComponent } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useSelector } from 'react-redux';

// CUSTOM COMPONENTS
import Banner from '../../components/banner';
import RNStatusBar from '../../components/statusBar';

// REDUX IMPORTS
import { getBanners } from '../../redux/reduxSelectors';

// STYLE IMPORTS
import * as colors from '../../constants/colors';
import style from './style';

const Home: FunctionComponent = () => {
  const data = useSelector((state) => getBanners(state));

  return (
    <View style={style.container}>
      <RNStatusBar />
      {data?.loading ? <ActivityIndicator color={colors.black} size="small" /> : <Banner data={data?.banners} />}
    </View>
  );
};

export default Home;
