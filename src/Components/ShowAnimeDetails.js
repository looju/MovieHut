import React from "react";
import { View, Text, ScrollView } from "react-native";

export const ShowAnimeDetails = ({ data }) => {
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
          Source:{" "}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontFamily: "Griffy_400Regular",
          }}
        >
          {data.source}
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
          Rating:{" "}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontFamily: "Griffy_400Regular",
          }}
        >
          {data.rating}
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
          Genre:{" "}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontFamily: "Griffy_400Regular",
          }}
        >
          {data.genres[1].name},{data.genres[0].name}
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
          {data.synopsis}
        </Text>
      </View>
    </ScrollView>
  );
};
