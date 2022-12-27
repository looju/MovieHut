import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Text, Image } from "react-native";
import { ComingSoon } from "../Services/Core/ComingSoon";

export const ComingSoonComponent = () => {
  





    const renderItem = ({ item }) => (
      <View style={styles.ImageView}>
        <Text>hiii</Text>
      </View>
    );

  


  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}> Coming soon to Cinemas</Text>
      </View>
      <FlatList
        data={ComingSoon}
        renderItem={renderItem}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    maxHeight: 300,
    marginTop: 10,
  },
  headerView: {
    marginVertical: 10,
  },
  headerText: {
    fontFamily: "Lato_400Regular",
    fontSize: 20,
    color: "#fff",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  ImageView:{
    backgroundColor:"#fff",
    marginVertical:10
  }
});
