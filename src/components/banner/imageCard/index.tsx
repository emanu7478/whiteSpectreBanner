import React from 'react';
import { View } from 'react-native';
import Image from '../../image';

import style from './style';

interface ImageCardProps {
  image: string;
}

function ImageCard({ image }: ImageCardProps) {
  return (
    <View style={style.container}>
      <Image uri={image} />
    </View>
  );
}

export default ImageCard;
