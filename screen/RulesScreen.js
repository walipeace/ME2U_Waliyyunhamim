import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';

export default class RulesScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>          
                <Text style={{fontSize: 40, fontWeight:'bold'}}> Rules in Mahallah </Text>
                <Text> </Text>
                
                <Text style={styles.textbox}>List of Offences</Text> 
                <Text> </Text>
                <View style={styles.rule}> 
                <Text>1. Failure to register</Text>
                <Text>2. Keeping and Feeding Pets</Text>
                <Text>3. Illegal Electrical Appliances</Text>
                <Text>4. Failure to Conserve Energy</Text>
                <Text>5. Dirty Compartments or Common Area</Text>
                <Text>6. Smoking</Text>
                <Text>7. Squatting and Collaborating</Text> 
                <Text>8. Vandalism</Text>
                <Text>9. Remove or Rearrange Room Furniture</Text>
                <Text>10. Cooking in the Mahallah</Text>           
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  textbox:{
    fontSize: 35,
    fontWeight: 'bold',
  },
  rule:{
    fontSize: 30,
    //alignSelf: 'center'
  }
});