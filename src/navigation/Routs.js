import React, { useContext, useState, useEffect } from 'react';
import {View,Text} from 'react-native'
import AuthStack from './AuthStack';
import HomeStack from "./HomeStack"
import { NavigationContainer } from '@react-navigation/native';

import { AuthContext } from "./AuthProvider";
import firebase from 'firebase'


export default function Routes() {
  const { user, setUser } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  const [initializing, setInitializing] = useState(true)


  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) 
      setInitializing(false)
      setLoading(false)
    
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (

    
   
    <NavigationContainer>
    {user ? <HomeStack /> : <AuthStack />}
  </NavigationContainer>

  );


}
