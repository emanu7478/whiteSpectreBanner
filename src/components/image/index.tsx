// LIBRARY IMPORTS
import React, { useState } from 'react';
import { useWindowDimensions, View } from 'react-native';
import FastImage from 'react-native-fast-image';

// LOADER
import Loader from '../loadingView';

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
