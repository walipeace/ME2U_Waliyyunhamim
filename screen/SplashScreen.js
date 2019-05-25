import React, { Component } from 'react';
import { Platform, AppRegistry,View,Image, Text, StyleSheet, TextInput, Button } from 'react-native';

export default class SplashScreen extends Component {
  render() {
    return (
<View style={styles.container}>
    <Text style={{fontSize:30}}>Welcome </Text>
    <Image source={{uri:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/house-icon.png'}} style={{width: 200, height: 200, borderRadius: 200/2}}/>

    <Text style={{fontSize: 27}}> Login </Text>
     <TextInput placeholder='Username' />
     <TextInput placeholder='Password' />
    <View style={{margin:7}} />
    <Button onPress={this.props.onLoginPress} title="Submit"/>
</View>

)}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      margin: 5,
      paddingTop: ( Platform.OS === 'Android' ) ? 20 : 0
    }, 
  });