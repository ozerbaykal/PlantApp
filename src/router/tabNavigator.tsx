import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../model/ui/tabParamList';
import { TABNAVIGATOR } from '../utils/routes';
import GetStarted from '../screens/getStarted';
import Home from '../screens/homePage';
import Diagnose from '../screens/diagnose';
import MyGarden from '../screens/garden';
import Profile from '../screens/profile';

const TabNavigator :React.FC   = () => {

    const Tab = createBottomTabNavigator<TabParamList>();
  return (

    <Tab.Navigator
    screenOptions={{
        headerShown: false,
       
      }}>
        <Tab.Screen name={TABNAVIGATOR.HOME} component={Home}/> 
        <Tab.Screen name={TABNAVIGATOR.DIAGNOSE} component={Diagnose}/> 
        <Tab.Screen name={TABNAVIGATOR.SCAN} component={Home}/> 
        <Tab.Screen name={TABNAVIGATOR.MY_GARDEN} component={MyGarden}/> 
        <Tab.Screen name={TABNAVIGATOR.PROFILE} component={Profile}/> 
    </Tab.Navigator>



  )
}

export default TabNavigator

const styles = StyleSheet.create({})