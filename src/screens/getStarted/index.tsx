import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from '../../utils/constants';
import {Colors} from '../../theme/colors';

const GetStarted = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text numberOfLines={1} style={styles.base}>
          <Text style={styles.light}>Welcome to </Text>
          <Text style={styles.regular}>Plant</Text>
          <Text style={styles.bold}>App</Text>
        </Text>

        <Text style={styles.subtitle}>
          Identify more than 3000+ plants and 88% accuracy.
        </Text>
      </View>

      <View>
        <Text>Resim buraya</Text>
      </View>

      <View>
        <Text>Button buraya</Text>
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: verticalScale(59),
  },
  box: {
    width: scale(300),
    height: verticalScale(85),
    paddingHorizontal: scale(24),

    justifyContent: 'space-between',
  },
  base: {
    width: scale(286),
    fontSize: moderateScale(28),
    lineHeight: moderateScale(28),
    letterSpacing: scale(0.07),
       color: Colors.MAIN_COLOR,
  },
  light: {
    fontFamily: 'Rubik-Light', // font-weight 300
  },
  regular: {
    fontFamily: 'Rubik-Regular', // font-weight 400
  },
  bold: {
    fontFamily: 'Rubik-SemiBold', // font-weight 600 (eklediysen)
  },

  subtitle: {
    fontSize: moderateScale(16),
    color: Colors.MAIN_COLOR,
    lineHeight: verticalScale(22),
    letterSpacing: scale(0.07),

    opacity: 0.7,
  },

 
});
