import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import {Colors} from '../../theme/colors';
import Button from '../../components/button';
import { scale, verticalScale} from '../../utils/constants';
import {ROOTNAVIGATOR} from '../../utils/routes';
import {PropsNavigation} from '../../model/ui/rootStackParamList';
import PageOne from './pageOne';
import PageTwo from './pageTwo';
import {onboardingSlides} from '../../data/ onboardingSlides';

const {width} = Dimensions.get('window');

const Onboarding: React.FC<PropsNavigation> = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatRef = useRef<FlatList>(null);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (currentIndex < onboardingSlides.length - 1) {
      flatRef.current?.scrollToIndex({index: currentIndex + 1});
    } else {
      navigation.navigate(ROOTNAVIGATOR.PAYWALL);
    }
  };

  const renderItem = ({item, index}: any) => {
    if (item.id === '1') {
      return <PageOne item={item} styles={styles} />;
    } else if (item.id === '2') {
      return <PageTwo item={item} styles={styles} />;
    } else {
      return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={onboardingSlides}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={flatRef}
        keyExtractor={item => item.id}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />

      {/* Button */}
      <Button title={'Continue'} onPress={handleNext} />
      {/* Dot Slider */}
      <View style={styles.dotsContainer}>
        {[0, 1, 2].map((dot, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor:
                  currentIndex === index ? Colors.MAIN_COLOR : Colors.GRAY,
              },
            ]}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(16),
    marginBottom: verticalScale(16),
  },
  dot: {
    width: scale(8),
    height: scale(8),
    borderRadius: scale(4),
    marginHorizontal: scale(4),
  },
  artworkStyle: {
    resizeMode: 'cover',
    position: 'absolute',
    left: scale(0),
    zIndex: 100,
  },
});
