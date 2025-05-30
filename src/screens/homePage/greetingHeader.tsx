import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import { moderateScale, scale, verticalScale } from '../../utils/constants';
import { Colors } from '../../theme/colors';
import { SearchIcon } from '../../assets/icons';

const { width } = Dimensions.get('window');

const GreetingHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Sağ yaprak */}
      <Image
        source={require('../../assets/images/leaf-right.png')}
        style={styles.leafRight}
      />

      {/* Sol yaprak */}
      <Image
        source={require('../../assets/images/leaf-left.png')}
        style={styles.leafLeft}
      />

      {/* Yazılar */}
      <View style={styles.textBox}>
        <Text style={styles.subtitle}>Hi, plant lover!</Text>
        <Text style={styles.title}>Good Afternoon! ☁️</Text>
      </View>

      {/* Arama kutusu */}
      <View style={styles.searchBox}>
        <SearchIcon width={scale(16)} height={scale(16)} style={styles.searchIcon} />
        <TextInput
          placeholder="Search for plants"
          placeholderTextColor="#8C8C8C"
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default GreetingHeader;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: verticalScale(40),
    paddingBottom: verticalScale(20),
    paddingHorizontal: scale(24),
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  textBox: {
    marginBottom: verticalScale(16),
  },
  subtitle: {
    fontSize: moderateScale(14),
    color: Colors.MAIN_COLOR,
    fontFamily: 'Rubik',
    fontWeight:"400"
  },
  title: {
    fontSize: moderateScale(24),
    lineHeight:verticalScale(28),
    fontWeight: '700',
    color: Colors.MAIN_COLOR,
    fontFamily: 'Rubik',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: scale(16),
    paddingHorizontal: scale(16),
    height: verticalScale(48),
  },
  searchIcon: {
    width: scale(16),
    height: scale(16),
    marginRight: scale(12),

  },
  input: {
    flex: 1,
    fontSize: moderateScale(14),
    color: Colors.MAIN_COLOR,
    fontFamily: 'Rubik-Regular',
  },
  leafRight: {
    position: 'absolute',
    width: scale(98.8),
    height: verticalScale(86.6),
    top: verticalScale(132.3),
    left: scale(397.41),
    transform: [{ rotate: '164.21deg' }],
    zIndex: -1,
  },
  leafLeft: {
    position: 'absolute',
    width: scale(122.39),
    height: verticalScale(99.68),
    top: verticalScale(197.01),
    left: scale(100.81),
    transform: [{ rotate: '-162.39deg' }],
    zIndex: -1,
  },
});

