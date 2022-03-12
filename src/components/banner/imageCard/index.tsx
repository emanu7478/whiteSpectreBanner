// LIBRARY IMPORTS
import React from 'react';
import { View } from 'react-native';

// CUSTOM COMPONENTS
import Image from '../../image';

// STYLE
import style from './style';

interface IImageCard {
  image: string;
}

function ImageCard({ image }: IImageCard) {
  return (
    <View style={style.container}>
      <Image uri={image} />
    </View>
  );
}

export default ImageCard;
