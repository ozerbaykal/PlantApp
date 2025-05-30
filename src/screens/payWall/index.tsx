import {
  FlatList,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {moderateScale, scale, verticalScale} from '../../utils/constants';
import {Colors} from '../../theme/colors';
import {PropsNavigation} from '../../model/ui/rootStackParamList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ROOTNAVIGATOR} from '../../utils/routes';
import {features} from '../../utils/features';
import OptionCard from './optionCard';
import {Feature} from '../../model/ui/feauturesProps';
import FeatureCard from './featuredCard';
import { PaywallBg } from '../../assets/images';

const PayWall: React.FC<PropsNavigation> = ({navigation}) => {
  const [selectedOption, setSelectedOption] = useState<
    'option1' | 'option2' | null
  >('option2');

  const handleOnboardingEnd = async () => {
    await AsyncStorage.setItem('onboardingFinished', 'true');
    navigation.reset({index: 0, routes: [{name: ROOTNAVIGATOR.ROOT_TABS}]});
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.MAIN_COLOR}}>
      <ImageBackground
        source={PaywallBg}
        style={[styles.imageBackgroundContainer, {flex: 1}]}>
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.container}>
            <View>
              <Text style={styles.title}>
                PlantApp <Text style={styles.light}>Premium</Text>
              </Text>
              <Text style={styles.subtitle}>Access All Features</Text>
            </View>

            <View>
              <FlatList<Feature>
                style={styles.featureList}
                data={features}
                horizontal
                renderItem={({item}) => <FeatureCard item={item} />}
                keyExtractor={item => item.title}
                showsHorizontalScrollIndicator={false}
              />
            </View>

            <View style={styles.optionsContainer}>
              <OptionCard
                thisOption="option1"
                selected={selectedOption}
                setSelected={setSelectedOption}
                title="1 Month"
                subtitle="$2.99/month, auto renewable"
              />
              <OptionCard
                thisOption="option2"
                selected={selectedOption}
                setSelected={setSelectedOption}
                title="1 Year"
                subtitle="First 3 days free, then $529,99/year"
                isGradient
                showSaveLabel
              />
            </View>

            <TouchableOpacity
              style={styles.confirmBtn}
              onPress={handleOnboardingEnd}>
              <Text style={styles.confirmBtnText}>Try free for 3 days</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
              <Text style={styles.footerText}>
                After the 3-day free trial period you’ll be charged ₺274.99 per
                year unless you cancel before the trial expires. Yearly
                Subscription is Auto-Renewable
              </Text>
              <Text style={styles.footerSubText}>
                Terms • Privacy • Restore
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default PayWall;

const styles = StyleSheet.create({
  imageBackgroundContainer: {
    height: verticalScale(571),
    width: scale(378),
    paddingTop: verticalScale(81),
  },
  container: {
    flexGrow: 1,
    marginTop: verticalScale(225),
    marginLeft: scale(24),
  },
  title: {
    fontFamily: 'Rubik-ExtraBold',
    fontSize: moderateScale(30),
    color: Colors.WHITE,
  },
  light: {
    fontWeight: '300',
  },
  subtitle: {
    color: '#FFFFFFB2',
    fontSize: moderateScale(17),
  },
  featureList: {
    marginTop: verticalScale(20),
  },
  featureCard: {
    backgroundColor: Colors.SECONDGREEN,
    width: scale(156),
    height: verticalScale(130),
    borderRadius: 10,
    marginRight: scale(8),
    paddingLeft: scale(16),
    paddingVertical: scale(16),
  },

  featureSubtitle: {
    color: Colors.WHITE,
    opacity: 0.7,
    fontSize: moderateScale(13),
    fontFamily: 'Rubik-regular',
  },
  optionsContainer: {
    marginRight: scale(24),
    marginTop: verticalScale(24),
    gap: verticalScale(16),
  },
  confirmBtn: {
    backgroundColor: Colors.GREEN,
    borderRadius: 10,
    marginRight: scale(24),
    marginTop: verticalScale(26),
  },
  confirmBtnText: {
    fontSize: moderateScale(16),
    color: Colors.WHITE,
    fontFamily: 'Rubik-medium',
    textAlign: 'center',
    paddingVertical: verticalScale(14),
  },
  footer: {
    marginRight: scale(24),
    marginTop: verticalScale(8),
  },
  footerText: {
    color: Colors.GRAY,
    fontSize: moderateScale(9),
    textAlign: 'center',
    fontWeight: 300,
  },
  footerSubText: {
    color: Colors.GRAY,
    fontSize: moderateScale(11),
    textAlign: 'center',
    marginTop: verticalScale(10),
  },
});
