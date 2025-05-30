import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Category } from '../../model/data/categoryState';
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
    padding: scale(12),
    justifyContent: 'space-between',
    overflow: 'hidden',
    marginVertical:scale(5)
  },
  title: {
    fontSize: moderateScale(15),
    fontFamily: 'Rubik',
    fontWeight:"600",
    color: Colors.MAIN_COLOR,
    marginBottom: verticalScale(8),
  },
  image: {
    width: '100%',
    height: verticalScale(120),
    resizeMode: 'contain',
  
  },
});

