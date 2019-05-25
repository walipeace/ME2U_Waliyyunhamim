import React from 'react';
import {Text, View, Button, ScrollView, Image, TouchableNativeFeedback, StyleSheet, Linking} from 'react-native';
const util = require ('util');
import {Location} from 'expo';
// import Firebase from 'react-native-firebase';

// import * as firebase from 'firebase';

// const firebaseConfig = {
//     apiKey: "AIzaSyA5ddQBMV0gB56SxuIGYZ7RaO5n8GPWCJY",
//     authDomain: "class-project-2af37.firebaseapp.com",
//     databaseURL: "https://class-project-2af37.firebaseio.com",
//     projectId: "class-project-2af37",
//     storageBucket: "class-project-2af37.appspot.com",
//     messagingSenderId: "178026845590",
//     appId: "1:178026845590:web:a21f734b6cce24b7"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// //import firebase from './Firebase.js';

export default class DetailsScreen extends React.Component{  
    render (){
        return(
            
            <ScrollView style={{
        flex: 1,
        flexDirection: 'column',
        //justifyContent: 'center',
        alignContent: 'center',
        }}>

        <View style={{alignItems:'center'}}>
        <Image source={require('./img/aminah.png')} style={styles.img}/>
          <Text style={styles.text}>Mahallah Aminah</Text>
        </View>
        
        <View style={styles.container}>
          
          <TouchableNativeFeedback onPress={() => Linking.openURL('https://www.facebook.com/mahallahaminah.iium.7')}>
          <Text style={{fontSize:15}}><Image source={require('./img/FB.png')} style={styles.img1}/> Mahallah Aminah IIUM</Text>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => Linking.openURL('https://www.instagram.com/mahallahaminahiium/?hl=en')}>
          <Text style={{fontSize:15}}><Image source={require('./img/IG.png')} style={styles.img1}/> @MahallahAminahIIUM </Text>
          </TouchableNativeFeedback>
          
          <TouchableNativeFeedback onPress={() => Linking.openURL('https://twitter.com/mahallahaminah?lang=en')}>
          <Text style={{fontSize:15}}><Image source={require('./img/twit.png')} style={styles.img1}/> @MahallahAminah </Text>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => Linking.openURL('tel:+60179684144')}>
          <Text style={{fontSize:15}}><Image source={require('./img/phone.png')} style={styles.img1}/> 0179684144 </Text>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback onPress={() => Linking.openURL('https://www.google.com/maps/place/Mahallah+Aminah,+IIUM/@3.2554097,101.7294458,17z/data=!3m1!4b1!4m5!3m4!1s0x31cc38c73b6147ef:0x84c0dbe93028fa49!8m2!3d3.2554097!4d101.7316345')}>
          <Text style={{fontSize:15}}><Image source={require('./img/location.png')} style={styles.img1}/> International Islamic University Malaysia, 53100, Jalan Gombak, Kuala Lumpur </Text>
          </TouchableNativeFeedback>
        </View>

        <Text style={{fontSize:25, fontWeight:'bold', marginTop:20, alignSelf:'center'}}>Mahallah Representative Committee</Text>

      <View style={{flex:1, flexDirection: 'row'}}>
        <View style={{flex:2, backgroundColor:'green', marginTop:10}}>
          <Image source={require('./img/lala.jpg')} style={styles.img2}/>
        </View>
        <View style={{flex:3, backgroundColor:'pink', marginTop:10, }}>
          <Text style={{marginLeft:20, marginTop:10}}>Name: Nurul Khalida</Text>
          <Text style={{marginLeft:20}}>Email: khalidaisa@gmail.com</Text>
        </View>
      </View>

      <View style={{flex:1, flexDirection: 'row'}}>
        <View style={{flex:2, marginTop:25, backgroundColor:'green'}}>
          <Image source={require('./img/icon.jpg')} style={styles.img2}/>
        </View>
        <View style={{flex:3, marginTop:25, backgroundColor:'pink'}}>
          <Text style={{marginLeft:20, marginTop:10}}>Name: Nurul Khalida</Text>
          <Text style={{marginLeft:20}}>Email: khalidaisa@gmail.com</Text>
        </View>
      </View>

      <View style={{flex:1, flexDirection: 'row'}}>
        <View style={{flex:2, backgroundColor:'green', marginTop:25}}>
          <Image source={require('./img/lala.jpg')} style={styles.img2}/>
        </View>
        <View style={{flex:3, backgroundColor:'pink', marginTop:25, }}>
          <Text style={{marginLeft:20, marginTop:10}}>Name: Nurul Khalida</Text>
          <Text style={{marginLeft:20}}>Email: khalidaisa@gmail.com</Text>
        </View>
      </View>

      <View style={{flex:1, flexDirection: 'row'}}>
        <View style={{flex:2, marginTop:25, backgroundColor:'green'}}>
          <Image source={require('./img/icon.jpg')} style={styles.img2}/>
        </View>
        <View style={{flex:3, marginTop:25, backgroundColor:'pink'}}>
          <Text style={{marginLeft:20, marginTop:10}}>Name: Nurul Khalida</Text>
          <Text style={{marginLeft:20}}>Email: khalidaisa@gmail.com</Text>
        </View>
      </View>
      </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  img:{
    // marginTop: 100,
    backgroundColors:'blue',
    height: 350,
    width: 350,
  },
  img1:{
    height:30,
    width: 30,
    margin: 30
  },
  img2:{
    height:100,
    width: 100,
    alignSelf:'center',
    marginTop: 10,
    marginBottom:10,
    borderRadius:50
  },
  text:{
    fontFamily: 'verdana',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

