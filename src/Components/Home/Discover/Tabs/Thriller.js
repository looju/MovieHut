import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

export const Thriller = ({ navigation }) => {
  const [tvData, setTvData] = useState([]);

  const fetchData = async () => {
    await fetch(
      "https://api.simkl.com/tv/genres/thriller/all-years?client_id=a4a932f81c143783f6fdc6d3dbe315d441e04f4e3d63578673ef818456798b4a",
      {
        method: "GET",
        headers: {
          Accept: "application/json;charset=utf-8",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setTvData(data))
      .catch((error) =>
        console.log("problem fetching tv data at Thriller.js" + error)
      );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.imageView}>
      <Animated.View entering={FadeInDown.duration(2500)}>
        <TouchableOpacity
          onPress={() => navigation.navigate("TvShowDetails", { data: item })}
        >
          <Image
            style={styles.image}
            source={{
              uri: `https://simkl.in/posters/${item.poster}_m.jpg`,
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );

  return (
    <View style={styles.container}>
      {tvData.length == 0 && (
        <View style={styles.lottie}>
          <ActivityIndicator
            size={30}
            color="#A020F0"
            style={styles.lottieStyle}
          />
        </View>
      )}
      <FlatList
        data={tvData}
        renderItem={renderItem}
        keyExtractor={(item) => item.fanart}
        numColumns={2}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    marginTop: 10,
  },
  image: {
    height: 200,
    width: 200,
  },
  GridViewContainer: {
    margin: 2,
    backgroundColor: "#fff",
  },
  imageView: {
    margin: 5,
  },
  lottie: {
    height: Dimensions.get("screen").height * 0.8,
    alignItems: "center",
    justifyContent: "center",
  },
  lottieStyle: {
    height: 200,
    width: 200,
  },
});
