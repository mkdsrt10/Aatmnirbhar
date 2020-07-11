import React from 'react';
import {View} from 'react-native';
import WebView from 'react-native-webview';

function Web({route, navigation}) {
  console.log(route.params.uri);
  return <WebView source={{uri: route.params.uri}} />;
}

export default Web;
