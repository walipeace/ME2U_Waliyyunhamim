import React from 'react';
import {
  Text,
  View,
  Button,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
const util = require('util');

export default class MRCScreen extends React.Component {

  render() {
    return (
      <ScrollView style={styles.container}>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
          <View style={{backgroundColor: '#FD6721', marginTop:10}}>
            <Text style={styles.buttonText}><Image source={require('./img/aminah.png')} style={(styles.pic)}/> Mahallah Aminah</Text>
          </View>
        </TouchableOpacity> 

         <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
          <View style={{backgroundColor:'#4A86E8', marginVertical:10}}>
              <Text style={styles.buttonText}><Image source={require('./img/bilal.jpg')} style={(styles.pic)}/> Mahallah Bilal</Text>
          </View>
        </TouchableOpacity>

         <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
          <View style={{backgroundColor:'#FDCA2E', marginBottom:10}}>
              <Text style={styles.buttonText}><Image source={require('./img/ruqayyah.jpg')} style={(styles.pic)}/> Mahallah Ruqayyah</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
          <View style={{backgroundColor:'#0D8E22', marginBottom:10}}>
              <Text style={styles.buttonText}><Image source={require('./img/ali.jpg')} style={(styles.pic)}/> Mahallah Ali</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
          <View style={{backgroundColor:'#6BCDFD', marginBottom:10}}>
              <Text style={styles.buttonText}><Image source={require('./img/msum.jpg')} style={(styles.pic)}/> Mahallah Sumayyah</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}>
          <View style={{backgroundColor:'#FC363B', marginBottom:10}}>
              <Text style={styles.buttonText}><Image source={require('./img/salah.png')} style={(styles.pic)}/> Mahallah Salahuddin</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
          <View style={{backgroundColor:'#FF8000', marginBottom:10}}>
              <Text style={styles.buttonText}><Image source={require('./img/halimah.jpg')} style={(styles.pic)}/> Mahallah Halimah</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
          <View style={{backgroundColor:'#699CFC', marginBottom:10}}>
              <Text style={styles.buttonText}><Image source={require('./img/siddiq.png')} style={(styles.pic)}/> Mahallah Siddiq</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
          <View style={{backgroundColor:'#A730E2', marginBottom:10}}>
              <Text style={styles.buttonText}><Image source={require('./img/hafsah.jpg')} style={(styles.pic)}/> Mahallah Hafsah</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
          <View style={{backgroundColor:'#8FC7EC', marginBottom:10}}>
              <Text style={styles.buttonText}><Image source={require('./img/asma.jpg')} style={(styles.pic)}/> Mahallah Asma</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
          <View style={{backgroundColor:'#4DBD0D', marginBottom:10}}>
              <Text style={styles.buttonText}><Image source={require('./img/asiah.jpg')} style={(styles.pic)}/> Mahallah Asiah</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
          <View style={{backgroundColor:'#EB2178', marginBottom:10}}>
              <Text style={styles.buttonText}><Image source={require('./img/saf.jpg')} style={(styles.pic)}/> Mahallah Safiyyah</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
          <View style={{backgroundColor:'#800000', marginBottom:10}}>
              <Text style={styles.buttonText}><Image source={require('./img/zubair.jpg')} style={(styles.pic)}/> Mahallah Zubair</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
          <View style={{backgroundColor:'#F9A602', marginBottom:10}}>
              <Text style={styles.buttonText}><Image source={require('./img/nusai.jpg')} style={(styles.pic)}/> Mahallah Nusaibah</Text>
          </View>
        </TouchableOpacity>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //paddingTop: 10,
    // alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    //justifyContent: 'center',
    alignContent: 'center',
    //paddingBottom: 10,
  },
  buttonText: {
    justifyContent: 'center',
    fontSize: 30,
    padding: 20,
    color: 'white',
  },
  pic:{
    margin: 20,
    width: 50, 
    height: 50, 
    paddingLeft: 10
  }
});
