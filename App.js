import React from 'react';
import { Button, Text, View, TouchableOpacity, Image, Component } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator, createAppContainer, TabBarIconProps, createSwitchNavigator } from 'react-navigation';
import PosterScreen from './screen/PosterScreen.js';
import MRCScreen from './screen/MRCScreen.js';
import ReportScreen from './screen/ReportScreen.js';
import RulesScreen from './screen/RulesScreen.js';
import DetailsScreen from './screen/DetailsScreen.js';
//import Header from './Header.js';
import Bubur from './screen/Bubur.js';
import SplashScreen from './screen/SplashScreen.js';

const RootStack = createStackNavigator({
  Home: SplashScreen,
  Poster: PosterScreen,
  MRC: MRCScreen,
  Report: ReportScreen,
  Rules: RulesScreen,
  Details: DetailsScreen,
  Bubur: Bubur
//},
//{
 // initialRouteName: 'Home'
});

const AppContainer = createAppContainer(RootStack);

const SplashStack = createStackNavigator({
  Splash: { screen: SplashScreen },
  Poster: { screen: PosterScreen },
});

const PosterStack = createStackNavigator({
  Poster: { screen: PosterScreen },
  MRC: { screen: MRCScreen },
  Report: { screen: ReportScreen },
  Rules: { screen: RulesScreen },
  Details: {screen: DetailsScreen},
  Bubur:{screen: Bubur},
});

const MRCStack = createStackNavigator({
  Poster: { screen: PosterScreen },
  MRC: { screen: MRCScreen },
  Report: { screen: ReportScreen },
  Rules: { screen: RulesScreen },
});

const ReportStack = createStackNavigator({
  Poster: { screen: PosterScreen },
  MRC: { screen: MRCScreen },
  Report: { screen: ReportScreen },
  Rules: { screen: RulesScreen },
});

const RulesStack = createStackNavigator({
  Poster: { screen: PosterScreen },
  MRC: { screen: MRCScreen },
  Report: { screen: ReportScreen },
  Rules: { screen: RulesScreen },
});

export default createAppContainer(createBottomTabNavigator(
  {
    Poster: { screen: PosterStack },
    MRC: { screen: MRCStack },
    Report: { screen: ReportStack },
    Rules: { screen: RulesStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Poster') {
          iconName = `ios-images${focused ? '' : '-outline'}`;
        } else if (routeName === 'MRC') {
          iconName = `./icon/ios-people${focused ? '' : '-outline'}`;
        } else if (routeName === 'Report') {
          iconName = `ios-clipboard${focused ? '' : '-outline'}`;
        } else if (routeName === 'Rules') {
          iconName = `ios-alert${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (
          <Ionicons name={iconName} size={25} color={tintColor} />);
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
));


