import React,{useEffect,useState} from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Popular } from "../../../../Services/Core/Popular";
import { FadeInView } from "../../../../Animation/Animation";

export const PopularComponent = ({ navigation }) => {
  

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("PopularMovieDetails", { data: item })}
    >
      <View>
        <View style={styles.ImageView}>
          <Image
            style={styles.ImageStyle}
            source={{ uri: `${item.img}` }}
            resizeMethod="resize"
          />
        </View>
        <View style={styles.titleView}>
          <Text style={styles.titleStyle}>{item.title}</Text>
        </View>
        <View style={styles.otherDetailsView}>
          <Text style={styles.titleStyle}>⭐ {item.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FadeInView duration={2500}>
        <ScrollView>
          <View style={styles.headerView}>
            <Text style={styles.headerText}> Popular movies of this year</Text>
          </View>
          <FlatList
            data={Popular}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
          />
        </ScrollView>
      </FadeInView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 370,
    maxHeight: 400,
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
    marginLeft: 5,
  },
  titleStyle: {
    fontFamily: "Oswald_400Regular",
    color: "#fff",
  },
  otherDetailsView: {
    backgroundColor: "#A020F0",
    width: 70,
    height: 50,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
