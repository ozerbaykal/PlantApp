import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ButtonProps} from '../../model/ui/buttonProps';
import {moderateScale, scale, verticalScale} from '../../utils/constants';
import {Colors} from '../../theme/colors';

const Button: React.FC<ButtonProps> = ({title,onPress,containerStyle,textStyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button,containerStyle]} activeOpacity={0.8}>
      <Text style={[styles.title,textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: scale(327),
    height: verticalScale(56),
    borderRadius: 12,
    marginHorizontal: scale(24),
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(18),
    backgroundColor: Colors.GREEN,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: moderateScale(15),
    color: Colors.WHİTE,
    letterSpacing: scale(-0.24),
    textAlign: 'center',
  },
});
