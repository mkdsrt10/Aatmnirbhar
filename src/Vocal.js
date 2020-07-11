import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, Button} from 'react-native';

function Vocal({navigation}) {
    return (
        <ScrollView>
            <View style={{margin: 20}}>
                <View style={{marginTop: 0}}>
                    <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}><Text style={{fontSize:30, fontWeight: 'bold'}}>Vocal For Local</Text><TouchableOpacity onPress={() => {navigation.openDrawer()}}><Image style={{width: 50, height: 50}} source={{uri:"https://img.icons8.com/cotton/64/000000/menu.png"}}/></TouchableOpacity></View>
                    <Text style={{fontSize:18, marginTop: 10}}>Proud to be Indian.</Text>
                </View>
                <TouchableOpacity onPress={() => {navigation.navigate('Web', {uri: 'https://www.plutonians.club'})}}>
                    <View style={{marginTop: 10, backgroundColor: '#312793', borderRadius: 10}}>
                        <Image style={{resizeMode: 'contain', maxWidth: '100%'}} source={require('./assets/plutovocal.png')}/>
                        <Text style={{fontSize:25, fontWeight: 'bold', color:'white', marginHorizontal:20}}>Pluto - Made in India</Text>
                        <Text style={{fontSize:20, marginVertical: 10, color:'white', marginHorizontal:20}}><Text style={{fontWeight: 'bold'}}>Pluto</Text> is the Bhartiya app for students to get rewarded for everything they do. Pluto is made in India to support Indian students in every aspect of life.</Text>
                        {/*<Text style={{fontSize:20, marginBottom: 10, color:'white', marginHorizontal:20, borderBottomWidth: 2, borderColor: 'white'}}>Click here to know more</Text>*/}
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop: 10, backgroundColor: 'white', borderRadius: 10, paddingVertical: 10}} onPress={() => {navigation.navigate('Web', {uri: 'https://www.republicworld.com/technology-news/apps/top-25-indian-apps-list.html'})}}>
                    <Text style={{fontSize:25, fontWeight: 'bold', marginHorizontal:20, marginVertical: 10}}>Other Indian Apps</Text>
                    <Image style={{resizeMode: 'cover', height: 200, marginTop: 10, borderRadius: 10}} source={{uri:"https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/q8div3fozsmhykbj_1587032191.jpeg?tr=w-812,h-464"}}/>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default Vocal;
