import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../model/ui/tabParamList';
import { TABNAVIGATOR } from '../utils/routes';
import Home from '../screens/homePage';
import Diagnose from '../screens/diagnose';
import MyGarden from '../screens/garden';
import Profile from '../screens/profile';
import {
  HomeIcon,
  GardenIcon,
  DiagnoseIcon,
  ProfileIcon,
} from '../assets/icons';
import { Colors } from '../theme/colors';
import { moderateScale, verticalScale } from '../utils/constants';
import CustomScanButton from '../components/CustomScanButton';


const TabNavigator :React.FC   = () => {

    const Tab = createBottomTabNavigator<TabParamList>();
  return (

  <Tab.Navigator
  screenOptions={{
    headerShown: false,
    tabBarStyle: {
      height: verticalScale(80),
      borderTopLeftRadius: moderateScale(24),
      borderTopRightRadius: moderateScale(24),
      backgroundColor: '#fff',
      position: 'absolute',
    },
    tabBarActiveTintColor: Colors.GREEN,
    tabBarInactiveTintColor: Colors.GRAY,
  }}
>
  <Tab.Screen
    name={TABNAVIGATOR.HOME}
    component={Home}
    options={{
      tabBarIcon: ({ color }) => <HomeIcon fill={color} />,
      tabBarLabel: 'Home',
    }}
  />
  <Tab.Screen
    name={TABNAVIGATOR.DIAGNOSE}
    component={Diagnose}
    options={{
      tabBarIcon: ({ color }) => <DiagnoseIcon fill={color} />,
      tabBarLabel: 'Diagnose',
    }}
  />
  <Tab.Screen
    name={TABNAVIGATOR.SCAN}
    component={Home}
      options={{
    tabBarButton: (props) => <CustomScanButton {...props} />,
  }}

  
  />
  <Tab.Screen
    name={TABNAVIGATOR.MY_GARDEN}
    component={MyGarden}
    options={{
      tabBarIcon: ({ color }) => <GardenIcon fill={color} />,
      tabBarLabel: 'My Garden',
    }}
  />
  <Tab.Screen
    name={TABNAVIGATOR.PROFILE}
    component={Profile}
    options={{
      tabBarIcon: ({ color }) => <ProfileIcon fill={color} />,
      tabBarLabel: 'Profile',
    }}
  />
</Tab.Navigator>



  )
}

export default TabNavigator

const styles = StyleSheet.create({})