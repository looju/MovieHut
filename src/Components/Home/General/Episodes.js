import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Image } from "react-native";
import { FadeInView } from "../../../Animation/Animation";

export const Episodes = ({ route }) => {
  const { data } = route.params;
  const [episodeData, setEpisodeData] = useState([]);

  const fetchData = async () => {
    await fetch(
      `https://api.simkl.com/tv/episodes/${data.ids.simkl}?client_id=a4a932f81c143783f6fdc6d3dbe315d441e04f4e3d63578673ef818456798b4a`
    )
      .then((response) => response.json())
      .then((data) => setEpisodeData(data))
      .catch((error) =>
        console.log("Error fetching data at Episodes.js" + error)
      );
  };


  useEffect(()=>{
    fetchData()
  },[])
  const renderItem = ({ item }) => (
    <View style={styles.GridViewContainer}>
      <FadeInView duration={2500}>
        <Image
          style={styles.image}
          source={{ uri: `https://simkl.in/posters/${item.poster}_m.jpg` }}
          resizeMode="cover"
        />
      </FadeInView>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data.users_recommendations}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
