import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from '../../utils/constants';
import {Colors} from '../../theme/colors';
import {Artwork, Leaves} from '../../assets/images';

interface PageTwoProps {
  item: any;
  styles: any;
}
const {width} = Dimensions.get('window');

const PageTwo: React.FC<PageTwoProps> = ({item}) => {
  return (
    <View style={styles.slide}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {item.title.split(item.boldPart)[0]}
          <Text style={styles.bold}>{item.boldPart}</Text>
          {item.title.split(item.boldPart)[1]}
        </Text>
        <Image source={item.brush} style={styles.brush} />
      </View>

      <View
        style={{
          width: scale(260),
          height: verticalScale(540),
          marginTop: verticalScale(79),
          alignSelf: 'center',
          position: 'relative',
        }}>
        <Image source={item.image} style={styles.contentImage} />
        <View style={styles.artworkContainer}>
          <View style={{width: '100%', height: '100%', position: 'relative'}}>
            <Image source={Artwork} style={styles.artworkStyle} />
          </View>
        </View>
      </View>
      <Image
        source={Leaves}
        style={styles.backgroundImage}
        blurRadius={15}
      />
    </View>
  );
};

export default PageTwo;

const styles = StyleSheet.create({
  slide: {
    width,
    justifyContent: 'flex-start',
  },
  titleContainer: {
    marginTop: verticalScale(12),
    marginLeft: scale(24),
    marginRight: 'auto',
    position: 'relative',
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
    top: verticalScale(33),
    right: scale(6),
    resizeMode: 'cover',
  },

  artworkContainer: {
    position: 'absolute',
    width: scale(168),
    height: verticalScale(185),
    top: verticalScale(-59),
    left: scale(138),
    zIndex: 10,
  },
  contentImage: {
    width: '100%',
    height: '100%',
  },
  artworkStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  backgroundImage: {
    position: 'absolute',
    resizeMode: 'stretch',
    width: scale(411),
    height: verticalScale(325),
    top: verticalScale(140),
    zIndex: -1,
    transform: [
      {
        rotate: '63deg',
      },
    ],
  },
});
