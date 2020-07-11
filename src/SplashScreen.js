import * as React from 'react';
import {View, Image, ActivityIndicator} from 'react-native';

export default function SplashScreen() {
  console.log('Splash Screen');
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <Image
        style={{resizeMode: 'contain', alignSelf: 'center'}}
        source={require('./assets/logo.png')}
      />
      <ActivityIndicator size="large" color="white" />
    </View>
  );
}
