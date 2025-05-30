import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from '../../utils/constants'
import { Colors } from '../../theme/colors'

const PremiumBanner = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FREE Premium Available</Text>
      <Text style={styles.subtitle}>Tap to upgrade your account!</Text>
    </View>
  )
}

export default PremiumBanner

const styles = StyleSheet.create({
    container:{
        width:scale(327),
        height:verticalScale(64),
        backgroundColor:Colors.BANNER,
        borderRadius:moderateScale(12),
        marginHorizontal:"auto"

        
    },
    title:{
        color:"#fff"

    },

    subtitle:{
         color:"#fff"

    },
    
})