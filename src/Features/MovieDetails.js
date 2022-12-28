import React,{useState} from "react";
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
  const [expanded, setExpanded] = useState(false);

  const Details = () => {
    return <Text>hiiiiiii</Text>;
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
          <TouchableOpacity
            onPress={() => {
              return <Text>hiiiiiii</Text>;
            }}
          >
            <Text style={styles.infoStyle}>Details</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.infoStyle}>Cast</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.infoStyle}>More</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: "#fff",
    flex: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
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
