import React from 'react';
import {View} from 'react-native';
import WebView from 'react-native-webview';

function PlutoBuilders({navigation}) {
  return <WebView source={{uri: 'https://www.plutonians.club/task'}} />;
}

export default PlutoBuilders;
