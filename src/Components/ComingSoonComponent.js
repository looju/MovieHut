import React from "react";
import { View, StyleSheet, FlatList, Text, Image } from "react-native";
import { ComingSoon } from "../Services/Core/ComingSoon";

export const ComingSoonComponent = () => {
  const renderItem = ({ item }) => (
    <View>
      <View style={styles.ImageView}>
        <Image
          style={styles.ImageStyle}
          source={{ uri: `${item.thumbnail}` }}
        />
      </View>
      <View style={styles.titleView}>
        <Text style={styles.titleStyle}>{item.title}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}> Coming soon to Cinemas</Text>
      </View>
      <FlatList
        data={ComingSoon}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    maxHeight: 300,
    marginTop: 10,
  },
  headerView: {
    marginVertical: 10,
  },
  headerText: {
    fontFamily: "Lato_400Regular",
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  ImageView: {
    backgroundColor: "#fff",
    marginVertical: 10,
    marginHorizontal: 10,
    height: 200,
    width: 300,
    alignItems: "center",
    justifyContents: "center",
  },
  ImageStyle: {
    width: 300,
    height: 200,
  },
  titleView: {
    marginVertical: 10,
  },
  titleStyle: {
    fontFamily: "Griffy_400Regular",
  },
});
