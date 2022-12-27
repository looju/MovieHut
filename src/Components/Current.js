import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { HaveYouSeen } from "../Services/Core/HaveYouSeen";

export const Current = () => {
  const renderItem = ({ item }) => (
    <View>
      <View style={styles.ImageView}>
        <TouchableOpacity>
          <Image
            style={styles.ImageStyle}
            source={{ uri: `${item.posterUrl}` }}
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
        <View style={styles.headerView}>
          <Text style={styles.headerText}> Based on popular interest</Text>
        </View>
        <FlatList
          data={HaveYouSeen}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
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
    fontFamily: "Griffy_400Regular",
    color: "#fff",
  },
});
