import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {moderateScale, scale, verticalScale} from '../../utils/constants';
import {Colors} from '../../theme/colors';
import Button from '../../components/button';
import {ROOTNAVIGATOR} from '../../utils/routes';
import {PropsNavigation} from '../../model/ui/rootStackParamList';
import { Background, GetStartedImage } from '../../assets/images';

const GetStarted: React.FC<PropsNavigation> = ({navigation}) => {
  return (
    <ImageBackground
      source={Background}
      style={styles.background}
      resizeMode="cover">
      <View style={styles.container}>
        <View style={styles.box}>
          <Text numberOfLines={1} style={styles.base}>
            <Text style={styles.regular}>Welcome to </Text>
            <Text style={styles.bold}>PlantApp</Text>
          </Text>

          <Text style={styles.subtitle}>
            Identify more than 3000+ plants and 88% accuracy.
          </Text>
        </View>

        <Image source={GetStartedImage} />

        <View style={styles.bottomGroup}>
          <Button
            title="Get Started"
            onPress={() => navigation.navigate(ROOTNAVIGATOR.ONBOARDING)}
          />
          <Text style={styles.policyText}>
            By tapping next, you are agreeing to PlantID{' '}
            <Text style={styles.underline}>Terms of Use</Text> &{' '}
            <Text style={styles.underline}>Privacy Policy</Text>.
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  background: {
    position: 'relative',
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
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
    letterSpacing: scale(0.07),
    lineHeight: moderateScale(33),
    color: Colors.MAIN_COLOR,
  },
  regular: {
    fontFamily: 'Rubik-Regular', //400
    letterSpacing: scale(0.07),
  },
  bold: {
    fontFamily: 'Rubik-Semibold', //600
  },
  subtitle: {
    fontSize: moderateScale(16),
    fontFamily: 'Rubik-Regular',
    color: Colors.MAIN_COLOR,
    lineHeight: verticalScale(22),
    letterSpacing: scale(0.07),
    opacity: 0.7,
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    height: verticalScale(499),
    marginTop: verticalScale(168),
  },
  bottomGroup: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: scale(24),
    paddingBottom: verticalScale(24),
    gap: verticalScale(12),
    position: 'absolute',
    top: verticalScale(667),
  },
  policyText: {
    width: scale(232),
    height: verticalScale(30),
    fontFamily: 'Rubik-Regular',
    fontSize: moderateScale(11),
    lineHeight: verticalScale(15),
    letterSpacing: scale(0.07),
    color: Colors.POLICY,
    textAlign: 'center',
    opacity: 0.7,
  },
  underline: {
    textDecorationLine: 'underline',
  },
});
