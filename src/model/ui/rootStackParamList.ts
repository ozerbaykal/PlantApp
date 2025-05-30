import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ROOTNAVIGATOR} from '../../utils/routes';

export type RootStackParamList = {
  [ROOTNAVIGATOR.GET_STARTED]: undefined;
  [ROOTNAVIGATOR.ONBOARDING]: undefined;
  [ROOTNAVIGATOR.PAYWALL]: undefined;
  [ROOTNAVIGATOR.ROOT_TABS]: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface PropsNavigation {
  navigation: NavigationProp;
}

export type {PropsNavigation};
