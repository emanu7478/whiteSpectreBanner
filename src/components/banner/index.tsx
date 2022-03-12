// LIBRARY IMPORTS
import React, { useRef, useState } from 'react';
import { Animated, FlatList, useWindowDimensions, View } from 'react-native';

// CUSTOM COMPONENTS
import TextButton from '../textButton';
import ActiveIndicator from './activeIndicator';
import ImageCard from './imageCard';
import Indicators from './indicators';

// STYLE
import style from './style';
interface imagesProp {
  uri: string;
}

interface dataProp {
  title: string;
  images: imagesProp[];
}

interface BannerProps {
  data: dataProp[];
}

function Banner({ data }: BannerProps) {
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
          return <ImageCard image={item?.images?.[0]} />;
        }}
      />
      <View style={style.indicatorConatiner} pointerEvents="none">
        {data.map((_, index) => (
          <Indicators key={index} />
        ))}
        <ActiveIndicator translateX={translateX} scaleX={scaleX} />
      </View>
      <View style={style.textButtonsContainer}>
        {stepIndex > 0 && <TextButton title="Prev" titleStyle={style.prevTextButton} onPress={() => onPrevButtonPress()} />}
        {stepIndex < data?.length - 1 && <TextButton title="Next" titleStyle={style.nextTextButton} onPress={() => onNextButtonPress()} />}
      </View>
    </View>
  );
}

export default Banner;
