/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AsyncStorage} from 'react-native';
import Sliders from './src/Sliders';
import SplashScreen from './src/SplashScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Web from './src/Web';
import AatmNir from './src/Aatmnir';
import Pluto from './src/Pluto';
import Vocal from './src/Vocal';

async function _retrieveData(setfunction) {
  try {
    const value = await AsyncStorage.getItem('firsttime');
    console.log(value);
    if (value !== null) {
      // We have data!!
      setfunction(value);
    } else {
      await AsyncStorage.setItem('firsttime', 'True');
    }
  } catch (error) {
    // Error retrieving data
    await AsyncStorage.setItem('firsttime', 'True');
  }
}

const StackNav = createStackNavigator();
const Drawernav = createDrawerNavigator();

function AatmNirDrawer({navigation}) {
  return (
      <Drawernav.Navigator
          drawerType={'slide'}>
        <Drawernav.Screen name="Aatmnirbhar" component={AatmNir} />
        <Drawernav.Screen name="Students" component={Pluto} />
        <Drawernav.Screen name="Vocal For Local" component={Vocal} />
        <Drawernav.Screen name="About us" component={Sliders} />
      </Drawernav.Navigator>
  )
}

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isFirstTime, setIsFirstTime] = React.useState('True');
  React.useEffect(() => {
    _retrieveData(setIsFirstTime).then((r) =>
      setTimeout(() => setIsLoading(false), 500),
    );
  }, []);
  return (
    <NavigationContainer>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <StackNav.Navigator
          initialRouteName={isFirstTime === 'True' ? 'Welcome' : 'AatmNir'}>
          <StackNav.Screen
            options={{headerShown: false, headerStyle: {height: 0}}}
            component={Sliders}
            name="Welcome"
          />
          <StackNav.Screen
              options={{headerShown: false, headerStyle: {height: 0}}}
            // options={{title: 'Aatmnirbhar'}}
            component={AatmNirDrawer}
            name="AatmNir"
          />
          <StackNav.Screen
            // options={{headerShown: false, headerStyle: {height: 0}}}
            component={Web}
            options={({ route }) => ({ title: route.params.uri })}
            name="Web"
          />
        </StackNav.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
