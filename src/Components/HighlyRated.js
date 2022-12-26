import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { TopRated } from "../Services/Core/TopRated";

export const HighlyRated = () => {
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    TopRated().then((response) => {
      setTopRated(response);
    });
  }, []);

  const HeaderComponent = () => {
    return <Text> Highly rated</Text>;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text> Higlhly rated movies</Text>
      </View>
      <FlatList data={topRated} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    maxHeight: 300,
    backgroundColor: "#ff0",
    marginTop: 10,
  },
  headerView: {
    marginVertical: 10,
  },
});
