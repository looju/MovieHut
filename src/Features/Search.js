import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { Searchbar } from "react-native-paper";

export const Search = ({ navigation }) => {
  const [movieData, setMovieData] = useState("naruto");
  const [movieInfo, setMovieInfo] = useState([]);

  const SearchAPI = async (search) => {
    await fetch(`https://api.jikan.moe/v4/anime?q=${search}&sfw`)
      .then((res) => res.json())
      .then((data) => setMovieInfo(data))
      .catch((error) => {
        console.log("error at Search.js " + error);
      });
  };

  useEffect(() => {
    SearchAPI(movieData);
  }, []);

  const renderItems = ({ item }) => (
    <View style={styles.ImageView}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("MovieDetail", { data: item })}
        >
          <Image
            style={styles.ImageStyle}
            source={{ uri: `${item.images.jpg.image_url}` }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.detailView}>
        <View style={styles.titleView}>
          <Text style={styles.titleStyle}> {item.title}</Text>
        </View>
        <View style={styles.ratingView}>
          <Text style={styles.ratingStyle}>{item.score}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchView}>
        <Searchbar
          placeholder="Search for animes"
          value={movieData}
          onChangeText={(text) => setMovieData(text)}
          onSubmitEditing={() => {
            SearchAPI(movieData);
          }}
        />
      </View>
      <View>
        <FlatList data={movieInfo.data} renderItem={renderItems} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  searchView: {
    marginTop: 15,
  },

  ImageView: {
    backgroundColor: "#000",
    height: 200,
    width: Dimensions.get("screen").width * 0.5,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  ImageStyle: {
    width: Dimensions.get("screen").width * 0.5,
    height: 200,
  },
  titleView: {
    marginVertical: 15,
  },
  titleStyle: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Lato_400Regular",
  },
  ratingStyle: {
    color: "#fff",
  },
  detailView: {
    marginLeft: 5,
  },
  ratingView: {
    paddingTop: 15,
    backgroundColor: "#A020F0",
    width: 70,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});
