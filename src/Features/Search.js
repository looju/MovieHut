import React from "react";
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

export const Search = ({navigation}) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/cinema.jpg")}
      resizeMode="cover"
    >
      <View style={styles.searchView}>
        <Searchbar placeholder="Search for movies" />
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
          <Text style={styles.titleStyle}>HII</Text>
        </View>
        <View style={styles.OtherView}>
          <View style={styles.otherDetailsView}>
            <Text style={styles.titleStyle}> HII</Text>
          </View>
          <View style={styles.otherDetailsView}>
            <Text style={styles.titleStyle}>📽 HII</Text>
          </View>
          <View style={styles.otherDetailsView}>
            <Text style={styles.titleStyle}> ⌚️ HII</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
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
