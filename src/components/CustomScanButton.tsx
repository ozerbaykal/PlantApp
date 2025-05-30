import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {ScanIcon} from '../assets/icons';
import {scale, verticalScale} from '../utils/constants';

const CustomScanButton = (props: any) => {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.wrapper} {...props}>
      <Image
        source={require('../assets/images/scanButtonBg.png')}
        style={styles.bgImage}
      />
      <View style={styles.iconWrapper}>
        <ScanIcon width={28} height={28} fill="#fff" />
      </View>
    </TouchableOpacity>
  );
};

export default CustomScanButton;

const styles = StyleSheet.create({
  wrapper: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImage: {
    width: 64,
    height: 64,
    position: 'absolute',
    resizeMode: 'contain',
  },
  iconWrapper: {
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
