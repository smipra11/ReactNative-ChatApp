import React from 'react'

import LoginScreen from "../screens/LoginScreen"
import SignupScreen from "../screens/SignupScreen"
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();







export default function AuthStack(){
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

