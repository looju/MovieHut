import React from "react";
import { View, Text , ScrollView} from "react-native";

export const ShowDetails = ({data}) => {
  return (
    <ScrollView style={{height:800}}>
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
          {data.Title}
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
          Language:{" "}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontFamily: "Griffy_400Regular",
          }}
        >
          {data.Language}
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
          {data.Genre}
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
          {data.Plot}
        </Text>
      </View>
    </ScrollView>
  );
};
