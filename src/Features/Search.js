import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { SearchAPI } from "../Services/Calls/SearchAPI";

export const Search = ({ navigation }) => {
  const [movieData, setMovieData] = useState("");
  const [movieInfo, setMovieInfo] = useState([]);

  const SearchAPI = async (search = "naruto") => {
    await fetch(`https://api.jikan.moe/v4/anime?q=${search}&sfw`).then((res) =>
      res.json()
    );
    //  .then((data)=>console.log(data))
  };

  const SearchMovies = (value) => {
    SearchAPI(value)
      .then((res) => {
        console.log(res);
        setMovieInfo(res);
      })
      .catch((error) => {
        console.log("error at Search.js " + error);
      });
  };

  useEffect(() => {
    SearchAPI();
  });

  return (
    <View>
      <View style={styles.searchView}>
        <Searchbar
          placeholder="Search for movies"
          onChangeText={(text) => setMovieData(text)}
          onSubmitEditing={() => {
            SearchMovies(movieData);
          }}
        />
      </View>
      <View>
        <View style={styles.ImageView}>
          <TouchableOpacity
            onPress={() => navigation.navigate("MovieDetail", { data: item })}
          >
            <Image
              style={styles.ImageStyle}
              source={require("../../assets/movie.jpg")}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.titleView}>
          <Text style={styles.titleStyle}>{movieData.Plot}</Text>
        </View>
        <View style={styles.OtherView}>
          <View style={styles.otherDetailsView}>
            <Text style={styles.titleStyle}> {movieInfo.Title}</Text>
          </View>
          <View style={styles.otherDetailsView}>
            <Text style={styles.titleStyle}>📽 HII</Text>
          </View>
          <View style={styles.otherDetailsView}>
            <Text style={styles.titleStyle}> ⌚️ HII</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchView: {
    backgroundColor: "#ff0",
    marginTop: 15,
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
    marginTop: 50,
    height: 200,
    width: Dimensions.get("screen").width,
    alignItems: "center",
    justifyContents: "center",
  },
  ImageStyle: {
    width: Dimensions.get("screen").width,
    height: 200,
  },
  titleView: {
    marginVertical: 10,
    maxWidth: 300,
  },
  titleStyle: {
    fontFamily: "Griffy_400Regular",
    color: "#fff",
  },
  OtherView: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  otherDetailsView: {
    backgroundColor: "#A020F0",
    width: 100,
    height: 50,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
