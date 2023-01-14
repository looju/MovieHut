import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
 
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { Action } from "../Tabs/Action";
import { Adventure } from "../Tabs/Adventure";
import { Comedy } from "../Tabs/Comedy";
import { Crime } from "./../Tabs/Crime";
import { Fantasy } from "./../Tabs/Fantasy";
import { Drama } from "./../Tabs/Drama";
import { Family } from "./../Tabs/Family";
import { Horror } from "./../Tabs/Horror";
import { Thriller } from "./../Tabs/Thriller";
import { Romance } from "./../Tabs/Romance";

export const HeaderComponent = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState("");

  const SelectedTab = () => {
    switch (selectedTab) {
      case "A":
        return <Action navigation={navigation} />;
      case "B":
        return <Adventure navigation={navigation} />;
      case "C":
        return <Comedy navigation={navigation} />;
      case "D":
        return <Crime navigation={navigation} />;
      case "E":
        return <Drama navigation={navigation} />;
      case "F":
        return <Family navigation={navigation} />;
      case "G":
        return <Fantasy navigation={navigation} />;
      case "H":
        return <Horror navigation={navigation} />;
      case "I":
        return <Romance navigation={navigation} />;
      case "J":
        return <Thriller navigation={navigation} />;
      default:
        return (
          <ActivityIndicator
            size={30}
            color="#A020F0"
            style={{ marginTop: Dimensions.get("screen").height * 0.4 }}
          />
        );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.genreContainer}>
        <ScrollView horizontal>
          <TouchableOpacity onPress={() => setSelectedTab("A")}>
            <View
              style={[
                styles.button,
                { borderColor: selectedTab == "A" ? "#A020F0" : "#fff" },
              ]}
            >
              <Text style={styles.text}>Action</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab("B")}>
            <View
              style={[
                styles.button,
                { borderColor: selectedTab == "B" ? "#A020F0" : "#fff" },
              ]}
            >
              <Text style={styles.text}>Adventure</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab("C")}>
            <View
              style={[
                styles.button,
                { borderColor: selectedTab == "C" ? "#A020F0" : "#fff" },
              ]}
            >
              <Text style={styles.text}>Comedy</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab("D")}>
            <View
              style={[
                styles.button,
                { borderColor: selectedTab == "D" ? "#A020F0" : "#fff" },
              ]}
            >
              <Text style={styles.text}>Crime</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab("E")}>
            <View
              style={[
                styles.button,
                { borderColor: selectedTab == "E" ? "#A020F0" : "#fff" },
              ]}
            >
              <Text style={styles.text}>Drama</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab("F")}>
            <View
              style={[
                styles.button,
                { borderColor: selectedTab == "F" ? "#A020F0" : "#fff" },
              ]}
            >
              <Text style={styles.text}>Family</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab("G")}>
            <View
              style={[
                styles.button,
                { borderColor: selectedTab == "G" ? "#A020F0" : "#fff" },
              ]}
            >
              <Text style={styles.text}>Fantasy</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab("H")}>
            <View
              style={[
                styles.button,
                { borderColor: selectedTab == "H" ? "#A020F0" : "#fff" },
              ]}
            >
              <Text style={styles.text}>Horror</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab("I")}>
            <View
              style={[
                styles.button,
                { borderColor: selectedTab == "I" ? "#A020F0" : "#fff" },
              ]}
            >
              <Text style={styles.text}>Romance</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab("J")}>
            <View
              style={[
                styles.button,
                { borderColor: selectedTab == "J" ? "#A020F0" : "#fff" },
              ]}
            >
              <Text style={styles.text}>Thriller</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
      {SelectedTab()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  genreContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  button: {
    width: 100,
    height: 50,
    borderWidth: 2,
    borderRadius: 510,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  text: {
    color: "#fff",
  },
});
