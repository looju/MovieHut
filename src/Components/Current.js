import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { FadeInView } from "../Animation/Animation";
import { HaveYouSeen } from "../Services/Core/HaveYouSeen";

export const Current = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View>
      <View style={styles.ImageView}>
        <TouchableOpacity
          onPress={() => navigation.navigate("MovieDetail", { data: item })}
        >
          <Image
            style={styles.ImageStyle}
            source={{ uri: `${item.Images[0]}` }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.titleView}>
        <Text style={styles.titleStyle}>{item.Title}</Text>
      </View>
      <View style={styles.OtherView}>
        <View style={styles.otherDetailsView}>
          <Text style={styles.titleStyle}> {item.Genre}</Text>
        </View>
        <View style={styles.otherDetailsView}>
          <Text style={styles.titleStyle}>📽 {item.Year}</Text>
        </View>
        <View style={styles.otherDetailsView}>
          <Text style={styles.titleStyle}> ⌚️ {item.Runtime}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <FadeInView duration={2500}>
          <View style={styles.headerView}>
            <Text style={styles.headerText}> Based on popular interest</Text>
          </View>
          <FlatList
            data={HaveYouSeen}
            renderItem={renderItem}
            keyExtractor={(item) => item.Plot}
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
    width: Dimensions.get("screen").width,
    alignItems: "center",
    justifyContents: "center",
  },
  ImageStyle: {
    width: Dimensions.get("screen").width,
    height: 200,
  },
  titleView: {
    marginVertical: 10,
    maxWidth: 300,
  },
  titleStyle: {
    fontFamily: "Griffy_400Regular",
    color: "#fff",
  },
  OtherView: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  otherDetailsView: {
    marginHorizontal: 10,
    backgroundColor: "#A020F0",
    width: 100,
    height: 50,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
