import React from 'react';
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../../theme/colors';
import { moderateScale, scale, verticalScale } from '../../utils/constants';
import { CategoryCardProps } from '../../model/data/categoryCardProps';

const CategoryCard: React.FC<CategoryCardProps> = ({ item }) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
      <Text style={styles.title}>{item.title}</Text>
      <Image source={{ uri: item.image.url }} style={styles.image} />
    </TouchableOpacity>
  );
};

export default CategoryCard;
const styles = StyleSheet.create({
  card: {
    width: scale(158),
    height: verticalScale(152),
    backgroundColor: '#fff',
    borderRadius: scale(16),
    borderWidth:scale(0.5),
    borderColor:"#29BB892E",
    justifyContent: 'space-between',
    overflow: 'hidden',
    marginVertical:scale(5)
  },
  title: {
    paddingTop:verticalScale(12),
    paddingLeft:scale(12),
    fontSize: moderateScale(15),
    fontFamily: 'Rubik-SemiBold',
    color: Colors.MAIN_COLOR,
    marginBottom: verticalScale(8),
  },
  image: {
    width: '100%',
    height: verticalScale(120),
    resizeMode: 'cover',
  
  },
});

