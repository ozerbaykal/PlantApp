import {StyleSheet, View} from 'react-native';
import {useEffect, useState} from 'react';
import RootNavigator from './src/router/rootNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {Colors} from './src/theme/colors';
import {ROOTNAVIGATOR} from './src/utils/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  
  const [initialRoute, setInitialRoute] = useState<string | null>(null);
  
  useEffect(() => {
    const checkOnboarding = async () => {
      const isOnboarded = await AsyncStorage.getItem('onboardingFinished');
      setInitialRoute(
        !isOnboarded ? ROOTNAVIGATOR.ROOT_TABS : ROOTNAVIGATOR.GET_STARTED,
      );
    };
    checkOnboarding();
  }, []);
  if (initialRoute === null) {
    return <View style={{flex: 1, backgroundColor: Colors.WHITE}}></View>; // veya bir loading spinner gösterebiliriz
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator initialRoute={initialRoute} />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
