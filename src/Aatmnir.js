import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, Button} from 'react-native';
import WebView from 'react-native-webview';

function AatmNir({navigation}) {
    return (
        <ScrollView>
        <View style={{margin: 20}}>
            <View style={{marginTop: 0}}>
                <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}><Text style={{fontSize:30, fontWeight: 'bold'}}>Aatmnirbhar</Text><TouchableOpacity onPress={() => {navigation.openDrawer()}}><Image style={{width: 50, height: 50}} source={{uri:"https://img.icons8.com/cotton/64/000000/menu.png"}}/></TouchableOpacity></View>
                <Text style={{fontSize:18, marginTop: 10}}>We want to help India become Aatmnirbhar.</Text>
            </View>
            <TouchableOpacity onPress={() => {navigation.navigate('Web', {uri: 'https://en.wikipedia.org/wiki/Atmanirbhar_Bharat'})}}>
                <View style={{marginTop: 20, backgroundColor: 'white', borderRadius: 10, padding: 10, elevation:5}}>
                    <Text style={{fontSize:20, fontWeight: 'bold'}}>PM's Vission</Text>
                    <Text style={{fontSize:18, marginTop: 10}}><Text>Atmanirbhar Bharat</Text> is the vision of the Prime Minister of India Narendra Modi of making India a self-reliant nation.</Text>
                    <Image style={{resizeMode: 'cover', height: 200, marginTop: 10}} source={{uri:"https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/w0kofadwggrbd5hq_1589295952.jpeg?tr=w-812,h-464"}}/>
                </View>
            </TouchableOpacity>
            <View style={{marginTop: 20}}>
                <Text style={{fontSize:30, fontWeight: 'bold'}}>How to become Aatmnirbhar?</Text>
                <Text style={{fontSize:18, marginTop: 10}}>If each and every Indian become self-sufficient by start earning from a early age, we can bring this mission of PM Modi to life. <Text style={{fontWeight: 'bold'}}>VOCAL-FOR-LOCAL</Text> with non-dependence on anyone will make India 'Aatmnirbhar'</Text>
            </View>
            <View style={{marginTop: 20}}>
                <Text style={{fontSize:30, fontWeight: 'bold'}}>We will help you become Aatmnirbhar.</Text>
                <Text style={{fontSize:18, marginTop: 10}}>We are going to post all jobs and opportunities for you to earn.</Text>
                <TouchableOpacity style={{marginVertical: 10, padding: 20}} onPress={() => {navigation.navigate("Web", {uri:"https://www.plutonians.club/task"})}}>
                    <Text style={{fontSize:20, textAlign: 'center'}}>If you are a students then register with Pluto to earn.</Text>
                    <Text style={{fontSize:18, textAlign: 'center', marginTop: 10}}>Click here</Text>
                    <Text style={{fontSize:28, textAlign: 'center', marginTop: 10}}>www.plutonians.club</Text>
                </TouchableOpacity>
                <Button style={{marginTop: 20, paddingTop: 20}} onPress={() => navigation.navigate('Web', {uri:'https://www.naukri.com/'})}  title={"View Jobs"}/>
            </View>
        </View>
        </ScrollView>
    );
}

export default AatmNir;
