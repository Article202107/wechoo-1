import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from '../screens/Detail';
import ProfileScreen from '../screens/Profile';
import LoginScreen from '../screens/Login';
import TabNavigator from './TabNavigator';
import PostingScreen from '../screens/Posting';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => (
  <RootStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <RootStack.Screen name="Tab" component={TabNavigator} />
    <RootStack.Screen name="Detail" component={DetailScreen} />
    <RootStack.Screen name="Posting" component={PostingScreen} />
    <RootStack.Screen name="Profile" component={ProfileScreen} />
    <RootStack.Screen name="Login" component={LoginScreen} />
  </RootStack.Navigator>
);

export default RootNavigator;
