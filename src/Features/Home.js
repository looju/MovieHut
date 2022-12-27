import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { ComingSoonComponent } from "../Components/ComingSoonComponent";
import { PopularComponent } from "../Components/PopularComponent";

export const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <PopularComponent navigation={navigation}/>
        <ComingSoonComponent/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  ratedContainer: {
    height: 200,
    backgroundColor: "#ff0",
  },
});
