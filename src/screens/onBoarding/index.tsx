import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../theme/colors';
import Button from '../../components/button';
import { moderateScale, scale, verticalScale } from '../../utils/constants';
import { ROOTNAVIGATOR } from '../../utils/routes';
import { PropsNavigation } from '../../model/ui/rootStackParamList';

const { width } = Dimensions.get('window');

const Onboarding :React.FC<PropsNavigation> = ({navigation}) => {
  const onboardingSlides = [
  {
    id: '1',
    title: 'Take a photo to identify\nthe plant!',
    boldPart: 'the plant!',
    image: require('../../assets/images/content.png'),
    brush: require('../../assets/images/Brush.png'),
  },
  {
    id: '2',
    title: 'Get plant care guides',
    boldPart: ' care guides!',
    image: require('../../assets/images/iPhone.png'),
    brush: require('../../assets/images/Brush.png'),
  },
];

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatRef = useRef<FlatList>(null);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (currentIndex < onboardingSlides.length - 1) {
      flatRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.navigate(ROOTNAVIGATOR.PAYWALL);
    }
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.slide}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {item.title.split(item.boldPart)[0]}
          <Text style={styles.bold}>{item.boldPart}</Text>
        </Text>
        <Image source={item.brush} style={styles.brush} />
      </View>
      <Image source={item.image} style={styles.contentImage} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={onboardingSlides}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={flatRef}
        keyExtractor={(item) => item.id}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />

    

      {/* Button */}
      <Button
        title={"Continue"}
        onPress={handleNext}
     
      />
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
    </View>
  );
};

export default Onboarding;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slide: {
    width,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titleContainer: {
    marginTop: verticalScale(59),
    paddingHorizontal: scale(24),
    alignItems: 'center',
  },
  title: {
    fontSize: moderateScale(28),
    fontFamily: 'Rubik-Medium',
    fontWeight: '500',
    letterSpacing: scale(-1),
    textAlign: 'center',
    lineHeight: moderateScale(28),
    color: Colors.MAIN_COLOR,
  },
  bold: {
    fontFamily: 'Rubik-ExtraBold',
    fontWeight: '800',
  },
  brush: {
    width: scale(136),
    height: verticalScale(13),
    marginTop: verticalScale(8),
    marginLeft: scale(80),
  },
  contentImage: {
    width: scale(375),
    height: verticalScale(530),
    resizeMode: 'contain',
    marginTop: verticalScale(30),
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
});

