import React from "react";
import { View, Text, ScrollView } from "react-native";

export const ShowAnimeTrailer = ({ data }) => {
  return (
    <ScrollView>
      <View style={{ marginVertical: 10, flexDirection: "row" }}>
        <Text
          style={{
            color: "#A020F0",
            fontSize: 20,
            fontFamily: "Lato_400Regular",
          }}
        >
          More:{" "}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontFamily: "Griffy_400Regular",
          }}
        >
        
        </Text>
      </View>
      <View style={{ marginVertical: 10, flexDirection: "row" }}>
        <Text
          style={{
            color: "#A020F0",
            fontSize: 20,
            fontFamily: "Lato_400Regular",
          }}
        >
          Studio:{" "}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontFamily: "Griffy_400Regular",
          }}
        >
        </Text>
      </View>
      <View style={{ marginVertical: 10, flexDirection: "row" }}>
        <Text
          style={{
            color: "#A020F0",
            fontSize: 20,
            fontFamily: "Lato_400Regular",
          }}
        >
          Directed by:{" "}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontFamily: "Griffy_400Regular",
          }}
        >
          {data.Director}
        </Text>
      </View>
    </ScrollView>
  );
};
