import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { HighlyRated } from "../Components/HighlyRated";

export const Home = () => {
  return (
    <View style={styles.container}>
      <HighlyRated />
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
