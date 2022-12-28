import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { ShowDetails } from "../Components/ShowDetails";
import { ShowCast } from "../Components/ShowCast";
import { ShowMore } from "../Components/ShowMore";

export const MovieDetail = ({ route }) => {
  const { data } = route.params;
  const [details, setDetailsExpanded] = useState(true);
  const [cast, setCastExpanded] = useState(false);
  const [more, setMoreExpanded] = useState(false);

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
          <TouchableOpacity onPress={() => setDetailsExpanded(!details)}>
            <Text style={styles.infoStyle}>Details</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setCastExpanded(!cast)}>
            <Text style={styles.infoStyle}>Cast</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setMoreExpanded(!more)}>
            <Text style={styles.infoStyle}>More</Text>
          </TouchableOpacity>
        </View>
        {details && <ShowDetails data={data} />}
        {cast && <ShowCast data={data} />}
        {more && <ShowMore data={data} />}
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
