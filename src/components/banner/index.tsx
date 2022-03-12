// LIBRARY IMPORTS
import React, { useRef, useState } from 'react';
import { Animated, FlatList, useWindowDimensions, View } from 'react-native';

// CUSTOM COMPONENTS
import TextButton from '../textButton';
import BannerActiveIndicator from './bannerActiveIndicator';
import ImageCard from './imageCard';
import BannerIndicators from './bannerIndicators';

// STYLE
import style from './style';

interface IImageData {
  title: string;
  images: string[];
}

interface IBanner {
  data: IImageData[];
}

const getRandomImage = (images: string[]) => {
  const randomImageIndex = Math.floor(Math.random() * images.length);
  const image = images[randomImageIndex];
  return image;
};

function Banner({ data }: IBanner) {
  const flatListRef = useRef<FlatList>(null);
  let currentStepIndex = 0;
  const [stepIndex, setStepIndex] = useState(0);
  const { width } = useWindowDimensions();
  const scrollValue = useRef(new Animated.Value(0)).current;
  const translateX = scrollValue.interpolate({
    inputRange: [0, width],
    outputRange: [0, 20],
  });
  const inputRange = [0];
  const scaleOutputRange = [1];
  data?.forEach((_, i) => i !== 0 && inputRange.push(...[(width * (2 * i - 1)) / 2, width * i]));
  data?.forEach((_, i) => i !== 0 && scaleOutputRange.push(...[0, 1]));
  const scaleX = scrollValue.interpolate({
    inputRange,
    outputRange: scaleOutputRange,
  });

  const onViewRef = useRef((viewableItems: any) => {
    currentStepIndex = viewableItems.changed[0].index;

    setStepIndex(currentStepIndex);
  });

  const onNextButtonPress = () => {
    currentStepIndex = stepIndex + 1;
    flatListRef.current?.scrollToIndex({
      animated: true,
      index: currentStepIndex,
    });
  };

  const onPrevButtonPress = () => {
    currentStepIndex = stepIndex - 1;
    flatListRef.current?.scrollToIndex({
      animated: true,
      index: currentStepIndex,
    });
  };

  return (
    <View style={style.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        initialNumToRender={1}
        initialScrollIndex={0}
        decelerationRate={0}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
        bounces={false}
        scrollEventThrottle={16}
        refreshing={false}
        pagingEnabled
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollValue } } }], { useNativeDriver: false })}
        renderItem={({ item }) => {
          return <ImageCard image={getRandomImage(item?.images)} />;
        }}
      />
      <View style={style.indicatorConatiner} pointerEvents="none">
        {data.map((_, index) => (
          <BannerIndicators key={index} />
        ))}
        <BannerActiveIndicator translateX={translateX} scaleX={scaleX} />
      </View>
      <View style={style.textButtonsContainer}>
        <TextButton
          disabled={stepIndex === 0 ? true : false}
          title="Prev"
          titleStyle={[style.prevTextButton, stepIndex === 0 && style.disabledButton]}
          onPress={() => onPrevButtonPress()}
        />
        <TextButton
          disabled={stepIndex === data?.length - 1 ? true : false}
          title="Next"
          titleStyle={[style.nextTextButton, stepIndex === data?.length - 1 && style.disabledButton]}
          onPress={() => onNextButtonPress()}
        />
      </View>
    </View>
  );
}

export default Banner;
