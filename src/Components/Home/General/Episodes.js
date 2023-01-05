import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Text,
  Dimensions,
} from "react-native";
import { FadeInView } from "../../../Animation/Animation";

export const Episodes = ({ route }) => {
  const { data } = route.params;
  const [episodeData, setEpisodeData] = useState([]);

  const fetchData = async () => {
    await fetch(
      `https://api.simkl.com/tv/episodes/${data.ids.simkl}?client_id=a4a932f81c143783f6fdc6d3dbe315d441e04f4e3d63578673ef818456798b4a`,
      {
        method: "GET",
        headers: {
          Accept: "application/json;charset=utf-8",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setEpisodeData(data))
      .catch((error) =>
        console.log("Error fetching data at Episodes.js" + error)
      );
  };


 
  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.GridViewContainer}>
      <FadeInView duration={2500}>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: `https://simkl.in/episodes/${item.img}_w.jpg` }}
          />
        </View>
        <View style={{ marginVertical: 10, flexDirection: "row" }}>
          <Text style={styles.infoDesc}>Season: </Text>
          <Text style={styles.detailDesc}>{item.season}</Text>
        </View>
        <View style={{ marginVertical: 10, flexDirection: "row" }}>
          <Text style={styles.infoDesc}>Episode: </Text>
          <Text style={styles.detailDesc}>{item.episode}</Text>
        </View>
        <View style={{ marginVertical: 10, flexDirection: "row" }}>
          <Text style={styles.infoDesc}>Title: </Text>
          <Text style={styles.detailDesc}>{item.title}</Text>
        </View>
        <View style={{ marginVertical: 10, flexDirection: "row" }}>
          <Text style={styles.infoDesc}>Description: </Text>
          <Text style={styles.detailDesc}>{item.description}</Text>
        </View>
      </FadeInView>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={episodeData}
        renderItem={renderItem}
        keyExtractor={(item) => item.img}
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
    height: "100%",
    width: "100%",
  },
  imageView: {
    backgroundColor: "#fff",
    marginBottom: 10,
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height * 0.3,
  },
  infoDesc: {
    color: "#A020F0",
    fontSize: 20,
    fontFamily: "Lato_400Regular",
  },
  detailDesc: {
    color: "white",
    fontSize: 20,
    fontFamily: "Griffy_400Regular",
  },
});
