import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { ShowDetails } from "../Tabs/ShowDetails";
import { ShowTrailer } from "../Tabs/ShowTrailer";
import { ShowMore } from "../Tabs/ShowMore";

export const TrendingDetails = ({ route,navigation }) => {
  const { data } = route.params;
  const [selectedTab, setSelectedTab] = useState("");
  const [trailerData, setTrailerData] = useState("");

  

  const SelectedTab = () => {
    switch (selectedTab) {
      case "A":
        return <ShowDetails data={data} />;
      case "B":
        return <ShowMore data={data} />;
      case "C":
        return <ShowTrailer data={data} trailer={trailerData} />;
      default:
        return <View></View>;
    }
  };

  const fetchData = async () => {
    await fetch(
      `https://api.simkl.com/movies/${data.ids.simkl_id}?extended=full&client_id=a4a932f81c143783f6fdc6d3dbe315d441e04f4e3d63578673ef818456798b4a`,
      {
        method: "GET",
        headers: {
          Accept: "application/json;charset=utf-8",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setTrailerData(data))
      .catch((error) => {
        console.log("Problem fetching data at LatestDetails.js: " + error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);




  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          resizeMode="cover"
          source={{ uri: `https://simkl.in/fanart/${data.fanart}_mobile.jpg` }}
          style={styles.imageStyle}
        />
        <View style={styles.imageText}>
          <TouchableOpacity onPress={()=>navigation.navigate("SimilarMovies",{data:trailerData})}>
            <Text
              color="#fff"
              style={{
                color: "white",
                fontSize: 20,
                fontFamily: "Griffy_400Regular",
              }}
            >
              Similar movies 🎥
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.detailsView}>
        <View style={styles.mainInfoView}>
          <TouchableOpacity onPress={() => setSelectedTab("A")}>
            <Text
              style={[
                styles.infoStyle,
                { color: selectedTab == "A" ? "#A020F0" : "#fff" },
              ]}
            >
              Details
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab("B")}>
            <Text
              style={[
                styles.infoStyle,
                { color: selectedTab == "B" ? "#A020F0" : "#fff" },
              ]}
            >
              More
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab("C")}>
            <Text
              style={[
                styles.infoStyle,
                { color: selectedTab == "C" ? "#A020F0" : "#fff" },
              ]}
            >
              Trailer
            </Text>
          </TouchableOpacity>
        </View>
        {SelectedTab()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  imageView: {
    width: "100%",
    height: "50%",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  imageText: {
    position: "absolute",
    top: Dimensions.get("screen").height * 0.4,
    alignItems:"flex-start",
    justifyContent:"flex-start"
  },
  detailsView: {
    backgroundColor: "#000",
    flex: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderTopColor: "#fff",
    borderTopWidth: 3,
  },
  mainInfoView: {
    marginTop: 10,
    width: Dimensions.get("screen").width,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  infoStyle: {
    fontSize: 25,
    fontFamily: "Oswald_400Regular",
  },
});
