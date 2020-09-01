/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  AppState,
  YellowBox
} from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';


import LoginPage from './src/View/Login/login';
import Home from './src/View/Home/home';
import Profile from './src/View/profile/profile';
import AddProfile from './src/View/profile/addProfile';
import Dashboard from './src/View/Dashboard/dashboard';
import EditProfile from './src/View/EditProfile/editProfile';
import CreateProfile from './src/View/CreateProfile/createProfile';




export default class App extends React.Component {
  constructor(props){
    super(props);
    YellowBox.ignoreWarnings(['']);
  }


  render() {
    /* In the root component we are rendering the app navigator */
    return (
     <AppContainer />
    )
  }
}


const AppNavigator = createSwitchNavigator({
  LoginPage: LoginPage,
  Home: Home,
  Profile: Profile,
  Dashboard: Dashboard,
  AddProfile: AddProfile,
  CreateProfile: CreateProfile,
  EditProfile: EditProfile,
})

const AppContainer = createAppContainer(AppNavigator);






