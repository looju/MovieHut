import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";

export const HeaderComponent = () => {
  const Categories = [
    { Name: "Action", id: 1 },
    { Name: "Adventure", id: 2 },
    { Name: "Animation", id: 3 },
    { Name: "Comedy", id: 4 },
    { Name: "Crime", id: 5 },
    { Name: "Drama", id: 6 },
    { Name: "Family", id: 7 },
    { Name: "Horror", id: 8 },
    { Name: "Sci-Fi", id: 9 },
    { Name: "suspense", id: 10 },
  ];

  const renderItems = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.button}>
        <Text style={styles.text}>{item.Name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.genreContainer}>
      <FlatList
        data={Categories}
        renderItem={renderItems}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
  },
  genreContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    borderColor: "#fff",
    width: 100,
    height: 50,
    borderWidth: 2,
    borderRadius: 510,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  text: {
    color: "#fff",
  },
});
