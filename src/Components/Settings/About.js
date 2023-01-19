import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

export const About = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.text}>
          Do you love watching trailers for the latest and hottest movies, TV
          shows, and animes? With this amazing app, you can do just that! Enjoy
          catching up on your favorite flicks with ease. Find what's hot in the
          world of entertainment with our quick and easy-to-use search engine.
          Watch the trailers right away or save them to watch later. Get ready
          for a thrilling movie experience today!
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  text: {
    color: "#fff",
  },
  textView: {
    marginTop: 10,
  },
});
