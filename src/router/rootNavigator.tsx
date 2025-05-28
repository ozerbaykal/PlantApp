import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet} from 'react-native'
import { RootStackParamList } from '../model/ui/rootStackParamList';
import { ROOTNAVIGATOR } from '../utils/routes';
import GetStarted from '../screens/getStarted';
import TabNavigator from './tabNavigator';
import OnBoarding from '../screens/onBoarding';
import PayWall from '../screens/payWall';

const RootNavigator:React.FC = () => {

const Stack = createNativeStackNavigator<RootStackParamList>();
  return (



    <Stack.Navigator 
    screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name={ROOTNAVIGATOR.ROOT_TABS} component={TabNavigator}/>

        <Stack.Screen name={ROOTNAVIGATOR.GET_STARTED} component={GetStarted}/>
        <Stack.Screen name={ROOTNAVIGATOR.ONBOARDING} component={OnBoarding}/>
        <Stack.Screen name={ROOTNAVIGATOR.PAYWALL} component={PayWall}/>


    </Stack.Navigator>



  



   
  )
}

export default RootNavigator

const styles = StyleSheet.create({})