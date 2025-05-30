import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import {RootStackParamList} from '../model/ui/rootStackParamList';
import {ROOTNAVIGATOR} from '../utils/routes';
import GetStarted from '../screens/getStarted';
import TabNavigator from './tabNavigator';
import OnBoarding from '../screens/onBoarding';
import PayWall from '../screens/payWall';
import {RootNavigatorProps} from '../model/ui/rootNavigatorProps';

const RootNavigator: React.FC<RootNavigatorProps> = ({initialRoute}) => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROOTNAVIGATOR.GET_STARTED} component={GetStarted} />
      <Stack.Screen name={ROOTNAVIGATOR.ONBOARDING} component={OnBoarding} />
      <Stack.Screen name={ROOTNAVIGATOR.PAYWALL} component={PayWall} />
      <Stack.Screen
        options={{}}
        name={ROOTNAVIGATOR.ROOT_TABS}
        component={TabNavigator}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
