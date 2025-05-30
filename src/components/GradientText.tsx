import React from 'react';
import { Text, View } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import { GradientProps } from '../model/ui/gradientTextProps';

const GradientText:React.FC<GradientProps> = ({text,colors,textStyle,gradientStyle}) => {
  return (
    <MaskedView
      maskElement={
        <View style={{ backgroundColor: 'transparent' }}>
          <Text
            style={textStyle}
          >
            {text}
          </Text>
        </View>
      }
    >
      <LinearGradient
        colors={[...colors]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{...gradientStyle}}
      />
    </MaskedView>
  );
};

export default GradientText;
