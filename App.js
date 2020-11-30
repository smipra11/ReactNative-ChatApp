import { StatusBar } from 'expo-status-bar';
import React ,{useState,useEffect}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthStack from "./src/navigation/AuthStack"


import  firebase from 'firebase/app'



const firebaseConfig = {
  apiKey: "AIzaSyD0kNcGV5AoHevX2sQV4trQr_2woIRjo1I",
  authDomain: "react-native-chat-33015.firebaseapp.com",
  databaseURL: "https://react-native-chat-33015.firebaseio.com",
  projectId: "react-native-chat-33015",
  storageBucket: "react-native-chat-33015.appspot.com",
  messagingSenderId: "409111203286",
  appId: "1:409111203286:web:d79cac8a3308d3b89fe877"

}


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  
}




import Providers from "./src/navigation/index"








const App =() =>{
  return <Providers/>
};

export default App;




