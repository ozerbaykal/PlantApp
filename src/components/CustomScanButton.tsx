import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {ScanIcon} from '../assets/icons';
import {scale, verticalScale} from '../utils/constants';

const CustomScanButton = (props: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.9} style={styles.wrapper} {...props}>
        <Image
          source={require('../assets/images/scanButtonBg.png')}
          style={styles.bgImage}
        />
        <View style={styles.iconWrapper}>
          <ScanIcon width={28} height={28} fill="#fff" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomScanButton;

const styles = StyleSheet.create({
  container: {
    top: verticalScale(-30),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: scale(64),
    height: verticalScale(64),
  },
  wrapper: {
    width: scale(64),
    height: verticalScale(64),
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImage: {
    width: scale(64),
    height: verticalScale(64),
    position: 'absolute',
    resizeMode: 'contain',
  },
  iconWrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
