import React,{useState,useContext} from 'react'

import {View,Text,StyleSheet} from 'react-native'
import {Title,IconButton} from 'react-native-paper'
import FormInput from "../components/FormInput"
import FormButton from "../components/FormButton"
import { AuthContext } from '../navigation/AuthProvider';

const SignupScreen =({navigation}) =>{
    const[email,setEmail] =useState('')
    const[password,setPassword] = useState('')
    const { register } = useContext(AuthContext);
    return(
        <View style={styles.container}>
            <Title>Register to chat </Title>
            <FormInput
            labelName="Email"
            value={email}
            onChangeText={userEmail =>setEmail(userEmail)}/>

         <FormInput
            labelName="Password"
            value={password}
            onChangeText={userPassword =>setPassword(userPassword)}/>
        <FormButton
        title="SignUp"
         modeValue="contained"
         color="#f08e25"
        labelStyle={{ color: "white", fontSize: 20}}
        onPress={() => register(email, password)}/>

        <IconButton
        icon="keyboard-backspace"
        size={30}
        color="#f08e25"
        onPress={()=>navigation.goBack()}/>
        
        </View>
    )

}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
      alignItems: 'center'
    }
})

export default SignupScreen