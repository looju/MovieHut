import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Action } from "../Tabs/Action";
import { Adventure } from "../Tabs/Adventure";
import { Comedy } from "../Tabs/Comedy";
import { Crime } from "./../Tabs/Crime";
import { Documentary } from "./../Tabs/Documentary";
import { Drama } from "./../Tabs/Drama";
import { Family } from "./../Tabs/Family";
import { Horror } from "./../Tabs/Horror";
import { KDrama } from "./../Tabs/K-drama";
import { Romance } from "./../Tabs/Romance";

export const HeaderComponent = () => {
  const [selectedTab, setSelectedTab] = useState("");

  const SelectedTab = () => {
    switch (selectedTab) {
      case "A":
        return <Action />;
      case "B":
        return <Adventure />;
      case "C":
        return <Comedy />;
      case "D":
        return <Crime />;
      case "E":
        return <Documentary />;
      case "F":
        return <Drama />;
      case "G":
        return <Family />;
      case "H":
        return <Horror />;
      case "I":
        return <KDrama />;
      case "J":
        return <Romance />;
      default:
        return <View></View>;
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
              <Text style={styles.text}>Documentary</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab("F")}>
            <View
              style={[
                styles.button,
                { borderColor: selectedTab == "F" ? "#A020F0" : "#fff" },
              ]}
            >
              <Text style={styles.text}>Drama</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab("G")}>
            <View
              style={[
                styles.button,
                { borderColor: selectedTab == "G" ? "#A020F0" : "#fff" },
              ]}
            >
              <Text style={styles.text}>Family</Text>
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
              <Text style={styles.text}>K-drama</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab("J")}>
            <View
              style={[
                styles.button,
                { borderColor: selectedTab == "J" ? "#A020F0" : "#fff" },
              ]}
            >
              <Text style={styles.text}>Romance</Text>
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
    flexDirection:"row",
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
