import {TextStyle, ViewStyle} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export type {ButtonProps};
