import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, Alert, View, Button, Image} from 'react-native';

export default class Bubur extends Component{
  render(){
    return(
     <View style={styles.container}>
       <Text style={styles.textHeader}>Grand Making Bubur Lambuk</Text>
        <Image source={require('./img/bubur.jpeg')} style={{width: 300, height: 417}}/>
       
        <Text></Text>
        <Text style={styles.text}>Date: 20th April 2019 (Saturday)</Text>
        <Text style={styles.text}>Time: 1.00 pm</Text>
        <Text style={styles.text}>Venue: MPH Asiah </Text>
        <Text style={styles.text}>Fees: FREE</Text>   
                </View>
            );
            }  

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textHeader: {
      fontSize: 18,
      textAlign: 'center',
      margin: 6,
    },
    text: {
      textAlign: 'center',
    },
  });