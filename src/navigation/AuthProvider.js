import React, { createContext, useState } from 'react'

import firebase from 'firebase'









export const AuthContext = createContext({});


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async(email,password) =>{
                    try {
                        await firebase.auth().signInWithEmailAndPassword(email,password);
                        
                    } catch (error) {
                        console.log(error)
                        
                    }
                },
                register:async(email,password)=>{
                    try {
                        await firebase.auth().createUserWithEmailAndPassword(email,password)
                        
                    } catch (error) {
                        console.log(error)
                        
                    }
                },
                logout: async() =>{
                    try {
                        await firebase.auth().signOut();
                        
                    } catch (error) {
                        console.log(error)
                        
                    }
                }

            }}

        >
            {children}
        </AuthContext.Provider>
    );

};