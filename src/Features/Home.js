import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { PopularComponent } from "../Components/Home/Popular/Component/PopularComponent";
import { TrendingComponent } from './../Components/Home/Trending/Screen/TrendingComponent';
import { LatestComponent } from "../Components/Home/Latest/Components/LatestComponent.js";
export const Home = ({ navigation }) => {
 
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <ScrollView>
          <PopularComponent navigation={navigation} />
          <LatestComponent navigation={navigation} />
          <TrendingComponent navigation={navigation}/>
        </ScrollView>
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  },
  verticalContainer: {
    flex: 1,
    backgroundColor: "#000",
    borderTopWidth: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 15,
  },
});
