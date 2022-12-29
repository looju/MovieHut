import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import LottieView from "lottie-react-native";
import { ShowAnimeTrailer } from "../Components/ShowAnimeTrailer";
import { ShowAnimeDetails } from "../Components/ShowAnimeDetails";
import { ShowAnimeMore } from "../Components/ShowAnimeMore";

export const AnimeDetails = ({ route }) => {
  const { data } = route.params;
  const [selectedTab, setSelectedTab] = useState("");

  const SelectedTab = () => {
    switch (selectedTab) {
      case "A":
        return <ShowAnimeDetails data={data} />;
      case "B":
        return <ShowAnimeMore data={data} />;
      case "C":
        return <ShowAnimeTrailer data={data} />;
      default:
        return <View></View>;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          resizeMethod="scale"
          source={{ uri: `${data.images.jpg.large_image_url}` }}
          style={styles.imageStyle}
        />
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
    height: "45%",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
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
