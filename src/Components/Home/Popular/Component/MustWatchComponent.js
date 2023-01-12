import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { FadeInView } from "../../../../Animation/Animation";

export const MustWatchComponent = ({ navigation }) => {
  const [mustWatchData, setMustWatchData] = useState([]);

  const fetchData = async () => {
    await fetch(
      "https://api.simkl.com/tv/best/filter?type=series&client_id=a4a932f81c143783f6fdc6d3dbe315d441e04f4e3d63578673ef818456798b4a",
      {
        method: "GET",
        headers: {
          Accept: "application/json;charset=utf-8",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setMustWatchData(data))
      .catch((error) => {
        console.log("Problem fetching data at MustWatchComponent.js: " + error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View>
      <View style={styles.ImageView}>
        <TouchableOpacity
          onPress={() => navigation.navigate("TvShowDetails", { data: item })}
        >
          <Image
            style={styles.ImageStyle}
            source={{
              uri: `https://simkl.in/posters/${item.poster}_m.jpg`,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.titleView}>
        <Text style={styles.titleStyle}>{item.title}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <View stygitle={styles.headerView}>
          <Text style={styles.headerText}> Must watch</Text>
        </View>
        <FadeInView duration={2500}>
          {mustWatchData.length == 0 && (
            <View style={styles.lottie}>
              <ActivityIndicator
                size={30}
                color="#A020F0"
                style={styles.lottieStyle}
              />
            </View>
          )}
          <FlatList
            data={mustWatchData}
            renderItem={renderItem}
            keyExtractor={(item) => item.poster}
            horizontal
          />
        </FadeInView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    maxHeight: 300,
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
    marginVertical: 10,
    marginHorizontal: 10,
    height: 200,
    width: 300,
    alignItems: "center",
    justifyContents: "center",
  },
  ImageStyle: {
    width: 300,
    height: 200,
  },
  titleView: {
    marginVertical: 10,
    maxWidth: 300,
  },
  titleStyle: {
    fontFamily: "Oswald_400Regular",
    color: "#fff",
  },
  lottie: {
    height: Dimensions.get("screen").width*0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  lottieStyle: {
    height: 200,
    width: 200,
  },
});
