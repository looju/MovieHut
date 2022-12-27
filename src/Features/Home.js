import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { ComingSoonComponent } from "../Components/ComingSoonComponent";
import { PopularComponent } from "../Components/PopularComponent";
import { Current } from "../Components/Current";
export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <ScrollView>
          <PopularComponent navigation={navigation} />
          <ComingSoonComponent />
        </ScrollView>
      </View>
      <View style={styles.verticalContainer}>
        <Current />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  verticalContainer: {
    flex:1,
    backgroundColor: "#000",
    borderTopColor:"#A020F0",
    borderTopWidth:5,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
  },
});
