import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Category } from '../../model/data/categoryState';
import { Colors } from '../../theme/colors';
import { moderateScale, scale, verticalScale } from '../../utils/constants';
import { CategoryCardProps } from '../../model/data/categoryCardProps';


const CategoryCard: React.FC<CategoryCardProps> = ({ item }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.image.url }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(12),
    marginBottom: verticalScale(16),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    
  },
  image: {
    width: scale(72),
    height: scale(72),
    resizeMode: 'contain',
    marginBottom: verticalScale(12),
  },
  title: {
    fontSize: moderateScale(16),
    fontFamily: 'Rubik-SemiBold',
    color: Colors.MAIN_COLOR,
    textAlign: 'center',
  },
});

