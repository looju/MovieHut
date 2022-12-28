import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { Searchbar } from 'react-native-paper';


export const Search = () => {
  return (
    <ImageBackground style={styles.container} source={require("../../assets/cinema.jpg")} resizeMode="cover">
      <View style={styles.searchView}>
      <Searchbar/>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchView:{
    backgroundColor:"#ff0",
    marginTop:10
  }
});
