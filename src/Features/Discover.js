import React from 'react';
import {View, StyleSheet,Text,  ScrollView} from 'react-native';
import { HeaderComponent } from '../Components/Home/Discover/Component/HeaderComponent';
export const Discover = () => {
    return (
        <ScrollView style={styles.container}>
           <HeaderComponent/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
   container:{
    flex:1,
    backgroundColor:"#000"
   },
   componentView:{
    backgroundColor:"#ff0"
   }
})


