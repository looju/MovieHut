import React,{ createContext,useState} from 'react';
import {View, StyleSheet} from 'react-native';

export const UserProfile=createContext()


export const UserProfileProvider = ({children}) => {
 const [userAvatar,setUserAvatar]=useState('')
 const [userDisplayName,setUserDisplayName]=useState("")



    return (
      <UserProfile.Provider
      value={{
        userAvatar,
        setUserAvatar,
        userDisplayName,
        setUserDisplayName
      }}
      >
   {children}
      </UserProfile.Provider>
    );
}


