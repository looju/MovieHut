import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  Linking
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
export const PopularMovieDetails = ({ route }) => {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          resizeMethod="scale"
          source={{ uri: `${data.img}` }}
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.detailsView}>
        <View style={styles.titleAndLinkView}>
          <View style={styles.titleView}>
            <Text style={styles.titleStyle}>{data.title}</Text>
          </View>
          <View style={styles.linkView}>
          <TouchableOpacity onPress={()=>{
            Linking.openURL(`${data.url}`)
          }}>
        <MaterialCommunityIcons name="open-in-new" color="#A020F0" size={30}/>
        </TouchableOpacity>
          </View>
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
    width: "50%",
    height: "45%",
    marginLeft: "25%",
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
  titleAndLinkView: {
    marginVertical: 10,
  },
  titleStyle: {
    color: "#000",
    fontSize: 40,
    fontFamily: "Tangerine_400Regular",
  },
  titleView: {
    alignItems: "center",
    justifyContent: "center",
  },
  linkView: {
    bottom:35,
    alignItems:"flex-end",
    justifyContent:"flex-end"
  }
})
