import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Container, Button, Icon, Text, Form, Item, Label, Input, Picker, Content } from 'native-base';
import {addReport} from './services/AddReport.js';

export default class Report extends Component {
  constructor() {
    super();
    this.state = {
      date: 0,
      mahallah: null,
      roomNo: null,
      matricNo: 0,
      contactNo: 0,
      complaint: null
    };
  }

  setDate = (value) => {
    this.setState({ date: value });
  }

  selectMahallah = (value) => {
    this.setState({ mahallah: value });
  }

  setRoomNo = (value) => {
    this.setState({ roomNo: value });
  }

  setMatricNo = (value) => {
    this.setState({ matricNo: value });
  }

  setContactNo = (value) => {
    this.setState({ contactNo: value });
  }

  setComplaint = (value) => {
    this.setState({ complaint: value });
  }

  saveData = () => {
      if (this.state.date && this.state.mahallah && this.state.roomNo && this.state.matricNo && this.state.contactNo && this.state.complaint){
        if(isNaN(this.state.matricNo)){
            Alert.alert('Status', 'Invalid Matric No!');
        }
        else{
            addReport(this.state.mahallah, this.state.roomNo, this.state.matricNo, this.state.contactNo, this.state.complaint);
        }
      }
  }

  render() {
    return(
    <Container>
    <Content padder>
    <Text style={{textAlign: "center", height: 40, fontWeight: "bold", marginTop: 20}}>Report Page Details</Text>
    <Form>

      <Item fixedLabel last>
      <Label>Date : </Label>
      <Input onChangeText={this.setDate}/>
      </Item>

      <Item fixedLabel picker last>
      <Label>Mahallah : </Label>
      <Picker
      mode="dropdown"
      androidIcon={<Icon name="android-arrow-down-outline"/>}
      style={{ width: undefined }}
      placeholder="Select Mahallah"
      placeholderStyle={{ color: "#bfc6ea" }}
      placeholderIconColor="#007aff"
      selectedValue={this.state.mahallah}
      onValueChange={this.selectMahallah}
      Title="Mahallah"
      >
      <Picker.Item label="Aminah" value="Mahallah Aminah" />
      <Picker.Item label="Asiah" value="Mahallah Asiah" />
      <Picker.Item label="Ruqayyah" value="Mahallah Ruqayyah" />
      <Picker.Item label="Halimah" value="Mahallah Halimah" />
      <Picker.Item label="Maryam" value="Mahallah Maryam" />
      <Picker.Item label="Asma" value="Mahallah Asma" />
      <Picker.Item label="Hafsa" value="Mahallah Hafsa" />
      <Picker.Item label="Nusaibah" value="Mahallah Nusaibah" />
      <Picker.Item label="Sumayyah" value="Mahallah Sumayyah" />
      <Picker.Item label="Salahuddin" value="Mahallah Salahuddin" />
      <Picker.Item label="Bilal" value="Mahallah Bilal" />
      <Picker.Item label="Uthman" value="Mahallah Uthman" />
      <Picker.Item label="Farouq" value="Mahallah Farouq" />
      <Picker.Item label="Siddiq" value="Mahallah Siddiq" />
      <Picker.Item label="Ali" value="Mahallah Ali" />
      <Picker.Item label="Zubair" value="Mahallah Zubair" />
      <Picker.Item label="Safiyyah" value="Mahallah Safiyyah" />
      </Picker>
      </Item>

        <Item fixedLabel last>
        <Label>Room No : </Label>
        <Input onChangeText={this.setRoomNo} />
        </Item>

        <Item fixedLabel last>
        <Label>Matric No : </Label>
        <Input onChangeText={this.setMatricNo} />
        </Item>

        <Item fixedLabel last>
        <Label>Contact No : </Label>
        <Input onChangeText={this.setContactNo} />
        </Item>

        <Item fixedLabel last>
        <Label>Complaint : </Label>
        <Input onChangeText={this.setComplaint} />
        </Item>
      </Form>

      <Button block last style={{ marginTop: 50 }} onPress={this.saveData}>
        <Text style={{ fontWeight: "bold" }}>Submit</Text>
      </Button>
      </Content>
      </Container>
    );
}
}