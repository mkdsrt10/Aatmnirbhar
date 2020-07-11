import React from 'react';
import {
  AsyncStorage,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import WebView from 'react-native-webview';

async function _storeData(val) {
  try {
    await AsyncStorage.setItem('firsttime', val);
  } catch (error) {
    // Error saving data
  }
}

function Sliders({navigation, route}) {
  const slides = [
    {
      key: 's1',
      viewTrue: true,
      view: (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
          }}>
          <ImageBackground
            source={require('./assets/backIndia.jpg')}
            style={{
              flex: 1,
              resizeMode: 'cover',
              justifyContent: 'space-around',
              alignItems: 'center',
              paddingHorizontal: 10,
            }}>
            <Text
              style={{fontSize: 25, textAlign: 'center', fontWeight: 'bold'}}>
              We support the vision of our Prime Minister
            </Text>
            <Text
              style={{fontSize: 55, textAlign: 'center', fontWeight: 'bold'}}>
              Aatm Nirbhar Bharat
            </Text>
            <Image
              source={require('./assets/Modi.png')}
              style={{height: 300, resizeMode: 'contain'}}
            />
          </ImageBackground>
        </View>
      ),
    },
    {
      key: 's2',
      viewTrue: true,
      view: (
        <View
          style={{
            flex: 1,
            resizeMode: 'cover',
            justifyContent: 'space-around',
            alignItems: 'center',
            paddingHorizontal: 12,
            flexDirection: 'column',
            backgroundColor: '#333d94',
          }}>
          {/*<ImageBackground*/}
          {/*  source={require('./assets/backIndia.jpg')}*/}
          {/*  style={{*/}
          {/*    flex: 1,*/}
          {/*    resizeMode: 'cover',*/}
          {/*    justifyContent: 'space-around',*/}
          {/*    alignItems: 'center',*/}
          {/*    paddingHorizontal: 12,*/}
          {/*  }}>*/}
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              color: 'white',
              fontWeight: 'bold',
            }}>
            We want Young India to be independent.
          </Text>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              color: 'white',
              fontWeight: 'bold',
            }}>
            With this thought we are building a students payment app
          </Text>
          <Text
            style={{
              fontSize: 55,
              textAlign: 'center',
              color: 'white',
              fontWeight: 'bold',
            }}>
            Pluto
          </Text>
          <View>
            <Text
              style={{
                fontSize: 25,
                textAlign: 'center',
                color: 'white',
                fontWeight: 'bold',
              }}>
              Check us out on:
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Web', {
                  uri: 'https://www.plutonians.club',
                });
              }}>
              <Text
                style={{
                  fontSize: 25,
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  borderBottomWidth: 2,
                  borderColor: 'white',
                }}>
                www.plutonians.club
              </Text>
            </TouchableOpacity>
          </View>
          {/*</ImageBackground>*/}
        </View>
      ),
    },
  ];
  let _onSkip = () => {
      let nav = 'AatmNir';
    _storeData('False').then((r) => {
      navigation.navigate(nav);
    });
  };
  let _renderItem = ({item}) => {
    if (item.viewTrue) {
      return item.view;
    }
    return (
      <View>
        <Text>Hi</Text>
      </View>
    );
  };
  return (
    <AppIntroSlider
      data={slides}
      renderItem={_renderItem}
      onDone={_onSkip}
      showSkipButton={false}
      onSkip={_onSkip}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  title: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
  },
});

export default Sliders;
