import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  Image
} from "react-native";
import { FadeInView } from "../../../Animation/Animation";

export const SimilarMovies = ({ route }) => {
  const { data } = route.params;

  const renderItem = ({ item }) => (
    <View style={styles.GridViewContainer}>
   <FadeInView duration={2500}>
      <TouchableOpacity
        onPress={() => navigation.navigate("TrendingDetails", { data: data })}
      >
        <Image
          style={styles.image}
          source={{ uri: `https://simkl.in/posters/${item.poster}_m.jpg` }}
          resizeMode="cover"
        />
      </TouchableOpacity>
      </FadeInView>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data.users_recommendations}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  image: {
    height: 200,
  },
  GridViewContainer: {
    flex: 1,
    height: 200,
    margin: 2,
    backgroundColor: "#000",
  },
});
