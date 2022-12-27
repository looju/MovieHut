import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Popular } from "../Services/Core/Popular";

export const PopularComponent = ({navigation}) => {


  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={()=>navigation.navigate("PopularMovieDetails")}>
      <View>
        <View style={styles.ImageView}>
          <Image style={styles.ImageStyle} source={{ uri: `${item.img}` }} resizeMethod="resize"/>
        </View>
        <View style={styles.titleView}>
          <Text style={styles.titleStyle}>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (

    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}> Most popular</Text>
      </View>
      <FlatList
        data={Popular}
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
  
    marginVertical: 10,
    marginHorizontal: 10,
    height: 200,
    width: 200,
   
  },
  ImageStyle: {
    width: 180,
    height: 200,
  },
  titleView: {
    marginVertical: 10,
    maxWidth: 300,
    marginLeft:5
  },
  titleStyle: {
    fontFamily: "Griffy_400Regular",
    color: "#fff",
  },
});
