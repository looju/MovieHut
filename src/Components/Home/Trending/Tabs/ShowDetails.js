import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";

export const ShowDetails = ({ data }) => {
  

  return (
    <ScrollView style={{ height: 800 }}>
      <View style={{ marginVertical: 10, flexDirection: "row" }}>
        <Text
          style={{
            color: "#A020F0",
            fontSize: 20,
            fontFamily: "Lato_400Regular",
          }}
        >
          Title:{" "}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontFamily: "Griffy_400Regular",
          }}
        >
          {data.title}
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
          Released in:{" "}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontFamily: "Griffy_400Regular",
          }}
        >
          {data.country}
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
          Plot:{" "}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontFamily: "Griffy_400Regular",
          }}
        >
          {data.overview}
        </Text>
      </View>
    </ScrollView>
  );
};
