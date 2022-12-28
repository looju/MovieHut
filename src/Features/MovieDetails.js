import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
  Dimensions,
} from "react-native";
import { List } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const MovieDetail = ({ route }) => {
  const { data } = route.params;
  const [expanded, setExpanded] = useState(true);
  const [cast, setCastExpanded] = useState(false);
  const handlePress = () => setExpanded(!expanded);

  const Details = () => {
    return (
      <View
        style={{
          backgroundColor: "#ff0",
          width: 300,
          height: 200,
          bottom: 100,
        }}
      >
        <TouchableOpacity>
          <Text style={styles.infoStyle}>More</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          resizeMethod="scale"
          source={{ uri: `${data.Images[1]}` }}
          style={styles.imageStyle}
        />
      </View>

      <View style={styles.detailsView}>
        <View style={styles.mainInfoView}>
          <TouchableOpacity onPress={() => setExpanded(!expanded)}>
            <Text style={styles.infoStyle}>Details</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCastExpanded(!cast)}>
            <Text style={styles.infoStyle}>Cast</Text>
            {cast && (
              <View>
                <Text style={{ color: "white" }}>hooooooooi</Text>
              </View>
            )}
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.infoStyle}>More</Text>
          </TouchableOpacity>
        </View>
        {expanded && (
          <View>
            <View style={{ marginVertical: 10, flexDirection: "row" }}>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontFamily: "Lato_400Regular",
                }}
              >
                Title:{" "}
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontFamily: "Griffy_400Regular",
                }}
              >
                {data.Title}
              </Text>
            </View>
            <View style={{ marginVertical: 10, flexDirection: "row" }}>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontFamily: "Lato_400Regular",
                }}
              >
                Language:{" "}
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontFamily: "Griffy_400Regular",
                }}
              >
                {data.Language}
              </Text>
            </View>
            <View style={{ marginVertical: 10, flexDirection: "row" }}>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontFamily: "Lato_400Regular",
                }}
              >
                Genre:{" "}
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontFamily: "Griffy_400Regular",
                }}
              >
                {data.Genre}
              </Text>
            </View>
            <View style={{ marginVertical: 10, flexDirection: "row" }}>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontFamily: "Lato_400Regular",
                }}
              >
                Plot:{" "}
              </Text>
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontFamily: "Griffy_400Regular",
                }}
              >
                {data.Plot}
              </Text>
            </View>
          </View>
        )}
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
    color: "#fff",
  },
});
