import React from "react";
import { View, Text, ScrollView } from "react-native";

export const ShowMore = ({ data }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ marginVertical: 10, flexDirection: "row" }}>
        <Text
          style={{
            color: "#A020F0",
            fontSize: 20,
            fontFamily: "Lato_400Regular",
          }}
        >
          Show :{" "}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontFamily: "Griffy_400Regular",
          }}
        >
          {data.Type}
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
          Released:{" "}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontFamily: "Griffy_400Regular",
          }}
        >
          {data.Released}
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
          Runtime:{" "}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontFamily: "Griffy_400Regular",
          }}
        >
          {data.Runtime}
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
          Region:{" "}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontFamily: "Griffy_400Regular",
          }}
        >
          {data.Country}
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
          Awards:{" "}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontFamily: "Griffy_400Regular",
          }}
        >
          {data.Awards}
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
          IMDB Score:{" "}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontFamily: "Griffy_400Regular",
          }}
        >
          {data.imdbRating}
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
          MetaScore :{" "}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontFamily: "Griffy_400Regular",
          }}
        >
          {data.Metascore}
        </Text>
      </View>
    </ScrollView>
  );
};
