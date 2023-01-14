import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const Settings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.pictureView}>
        <Text>picture</Text>
      </View>
      <View style={styles.email}>
        <Text style={styles.emailText}>JohnAdeleyemi463@gmail.com</Text>
      </View>

      <TouchableOpacity style={styles.settings}>
        <View>
          <Text style={styles.otherText}>About</Text>
        </View>
        <View>
          <MaterialCommunityIcons color="#fff" size={25} name="menu-right" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settings}>
        <View>
          <Text style={styles.otherText}>Legal</Text>
        </View>
        <View>
          <MaterialCommunityIcons color="#fff" size={25} name="menu-right" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settings}>
        <View>
          <Text style={styles.otherText}>Support</Text>
        </View>
        <View>
          <MaterialCommunityIcons color="#fff" size={25} name="menu-right" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settings}>
        <View>
          <Text style={styles.otherText}>SignOut</Text>
        </View>
        <View>
      <MaterialCommunityIcons color="#fff" size={25} name="menu-right"/>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  pictureView: {
    width: 200,
    height: 200,
    borderRadius: 100,
    left: Dimensions.get("screen").width * 0.3,
    marginTop: 10,
    borderTopColor: "#A020F0",
    borderRightColor: "#FF0000",
    borderLeftColor: "#FFF",
    borderBottomColor: "#FF0",
    borderWidth: 2,
  },
  email: {
    left: 15,
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  emailText: {
    color: "#fff",
    fontFamily: "Oswald_400Regular",
    fontSize: 15,
  },
  settings: {
    marginTop: 20,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("screen").width,
  },
  otherText: {
    color: "#fff",
    fontFamily: "Oswald_400Regular",
    fontSize: 20,
  },
});
