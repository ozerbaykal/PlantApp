import {StyleSheet, Text, View} from 'react-native';
import {Feature} from '../../model/ui/feauturesProps';
import {Colors} from '../../theme/colors';
import {moderateScale, scale, verticalScale} from '../../utils/constants';

const FeatureCard = ({item}: {item: Feature}) => {
  return (
    <View style={styles.featureCard}>
      <View
        style={{
          backgroundColor: Colors.MAIN_COLOR,
          marginRight: 'auto',
          padding: scale(9),
          borderRadius: scale(9),
        }}>
        {item.icon}
      </View>
      <Text style={styles.featureTitle}>{item.title}</Text>
      <Text style={styles.featureSubtitle}>{item.subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontWeight: '400',
  },
  featureTitle: {
    color: Colors.WHITE,
    fontSize: moderateScale(20),
    fontWeight: '500',
    marginTop: verticalScale(8),
    marginBottom: verticalScale(4),
  },
});
export default FeatureCard;
