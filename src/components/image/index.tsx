import React, { useState } from 'react';
import { useWindowDimensions, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import Loader from '../loadingView';
// import style from './style';

interface ImageProps {
  uri: string;
}

function Image({ uri }: ImageProps) {
  const { width, height } = useWindowDimensions();
  const [imageLoading, setImageLoading] = useState(false);

  return (
    <View>
      <FastImage
        resizeMode="stretch"
        style={{ height: height, width: width }}
        onLoadStart={() => setImageLoading(true)}
        onLoadEnd={() => setImageLoading(false)}
        source={{ uri: uri }}
      />
      {imageLoading && <Loader />}
    </View>
  );
}

export default Image;
