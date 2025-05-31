import {TextStyle, ViewStyle} from 'react-native';

export interface GradientProps {
  text: string;
  colors: string[];
  textStyle?: TextStyle;
  gradientStyle?: ViewStyle;
}
