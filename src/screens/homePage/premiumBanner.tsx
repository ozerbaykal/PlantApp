import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { moderateScale, scale, verticalScale } from '../../utils/constants'
import { Colors } from '../../theme/colors'
import GradientText from '../../components/GradientText'
import { ArrowIcon } from '../../assets/icons'

const PremiumBanner = () => {

  const [notification, setNotification] = useState<number>(1)

  return (
    <TouchableOpacity style={styles.container}>
      <View style={{
        position: "relative", width: scale(36), height: verticalScale(30), alignItems: "center"
      }}>
        <Image source={require('../../assets/images/mailIcon.png')} resizeMode='cover' />
        <View
          style={styles.notification}
        >
          <Text style={styles.notificationText}>
            {notification}
          </Text>
        </View>

      </View>
      <View style={styles.texts}>

        <GradientText
          text={"FREE Premium Available"}
          colors={["#E5C990", "#E4B046"]}
          textStyle={{
            fontSize: moderateScale(16),
            fontWeight: 600
          }}
          gradientStyle={{
            height: verticalScale(21)
          }}
        />
        <GradientText
          text={"Tap to upgrade your account!"}
          colors={["#FFDE9C", "#F5C25B"]}
          textStyle={{
            fontSize: moderateScale(13),
          }}
          gradientStyle={{
            height: verticalScale(16)
          }}
        />
      </View>

      <View style={{justifyContent:"center"
       }}>
        <ArrowIcon />
      </View>

    </TouchableOpacity>
  )
}

export default PremiumBanner

const styles = StyleSheet.create({
  container: {
    width: scale(327),
    height: verticalScale(64),
    backgroundColor: Colors.BANNER,
    borderRadius: moderateScale(12),
    marginHorizontal: "auto",
    marginTop: verticalScale(24),
    paddingVertical: verticalScale(13),
    paddingHorizontal: scale(20),
    flexDirection: "row"
  },
  texts: {
    height: "100%",
    width: scale(228),
    marginLeft:scale(16)
  },
  title: {
    color: "#fff",
  },
  subtitle: {
    color: "#fff"
  },
  notification: {
    position: 'absolute',
    top: 0,
    right: scale(-4),
    width: scale(15),
    height: scale(15),
    backgroundColor: 'red',
    borderRadius: scale(7.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold'
  }

})