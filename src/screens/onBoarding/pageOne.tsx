import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from '../../utils/constants';
import {Colors} from '../../theme/colors';

interface PageOneProps {
  item: any;
  styles: any;
}
const {width} = Dimensions.get('window');

const PageOne: React.FC<PageOneProps> = ({item}) => {
  return (
    <View style={styles.slide}>
      <View style={styles.slide}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {item.title.split(item.boldPart)[0]}
            <Text style={styles.bold}>{item.boldPart}</Text>
            {item.title.split(item.boldPart)[1]}
          </Text>
          <Image source={item.brush} style={item.brushStyle} />
        </View>
        <Image source={item.image} style={styles.contentImage} />
      </View>
    </View>
  );
};

export default PageOne;

const styles = StyleSheet.create({
  slide: {
    width,
    justifyContent: 'flex-start',
  },
  titleContainer: {
    marginTop: verticalScale(12),
    marginLeft: scale(24),
    position: 'relative',
    marginRight: 'auto',
    height: verticalScale(66),
  },
  title: {
    paddingTop: verticalScale(5),
    fontSize: moderateScale(28),
    fontFamily: 'Rubik-Medium',
    letterSpacing: scale(-1),
    lineHeight: moderateScale(28, 0.5),
    color: Colors.MAIN_COLOR,
  },
  bold: {
    fontFamily: 'Rubik-ExtraBold',
  },
  brush: {
    position: 'absolute',
    width: scale(136),
    height: verticalScale(13),
    top: verticalScale(28),
    left: scale(170),
    resizeMode: 'cover',
  },
  contentImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
