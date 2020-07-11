import React from 'react';
import {View} from 'react-native';
import WebView from 'react-native-webview';

function Pluto({navigation}) {
  return <WebView source={{uri: 'https://www.plutonians.club'}}/>;
}

export default Pluto;
