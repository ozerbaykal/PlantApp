import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {moderateScale, scale, verticalScale} from '../../utils/constants';
import {QuestionCardProps} from '../../model/data/questionCardProps';
import {Colors} from '../../theme/colors';

const QuestionCard: React.FC<QuestionCardProps> = ({
  title,
  subtitle,
  image_uri,
  uri,
}) => {
  const handlePress = () => {
    Linking.openURL(uri);
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={handlePress}
      activeOpacity={0.8}>
      <Image source={{uri: image_uri}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default QuestionCard;
const styles = StyleSheet.create({
  card: {
    width: scale(240),
    height:verticalScale(164),
    marginRight: scale(16),
    borderRadius: scale(18),
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height:"100%",
    resizeMode: 'cover',
  },
  textContainer: {
    width: scale(200),
    height: verticalScale(40),
    padding: scale(12),
    position: 'absolute',
    bottom: 25,
  },
  title: {
    fontFamily: 'Rubik',
    fontSize: moderateScale(15),
    fontWeight: '500',
    color: Colors.WHITE,
  },
  subtitle: {
    fontFamily: 'Rubik',
    fontSize: moderateScale(12),
    fontWeight: '400',
    color: Colors.WHITE,
  },
});
