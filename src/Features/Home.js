import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { PopularComponent } from "../Components/PopularComponent";
import { Current } from "../Components/Current";
import { LatestComponent } from "../Components/LatestComponent";
export const Home = ({ navigation }) => {
 
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <ScrollView>
          <PopularComponent navigation={navigation} />
          <Current navigation={navigation} />
          <LatestComponent/>
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
