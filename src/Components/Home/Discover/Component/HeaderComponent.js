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
        return <Action data={data} />;
      case "B":
        return <Adventure data={data} />;
      case "C":
        return <Comedy data={data} />;
      case "D":
        return <Crime trailer={trailerData} />;
      case "E":
        return <Documentary trailer={trailerData} />;
      case "F":
        return <Drama trailer={trailerData} />;
      case "G":
        return <Family trailer={trailerData} />;
      case "H":
        return <Horror trailer={trailerData} />;
      case "I":
        return <KDrama trailer={trailerData} />;
      case "J":
        return <Romance trailer={trailerData} />;
      default:
        return <View></View>;
    }
  };

  return (
    <View style={styles.genreContainer}>
      <TouchableOpacity>
        <View
          style={[
            styles.button,
            { borderColor: selectedTab == "A" ? "#A020F0" : "#fff" },
          ]}
        >
          <Text style={styles.text}>Action</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={[
            styles.button,
            { borderColor: selectedTab == "B" ? "#A020F0" : "#fff" },
          ]}
        >
          <Text style={styles.text}>Adventure</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={[
            styles.button,
            { borderColor: selectedTab == "C" ? "#A020F0" : "#fff" },
          ]}
        >
          <Text style={styles.text}>Comedy</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={[
            styles.button,
            { borderColor: selectedTab == "D" ? "#A020F0" : "#fff" },
          ]}
        >
          <Text style={styles.text}>Crime</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={[
            styles.button,
            { borderColor: selectedTab == "E" ? "#A020F0" : "#fff" },
          ]}
        >
          <Text style={styles.text}>Documentary</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={[
            styles.button,
            { borderColor: selectedTab == "F" ? "#A020F0" : "#fff" },
          ]}
        >
          <Text style={styles.text}>Drama</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={[
            styles.button,
            { borderColor: selectedTab == "G" ? "#A020F0" : "#fff" },
          ]}
        >
          <Text style={styles.text}>Family</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={[
            styles.button,
            { borderColor: selectedTab == "H" ? "#A020F0" : "#fff" },
          ]}
        >
          <Text style={styles.text}>Horror</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={[
            styles.button,
            { borderColor: selectedTab == "I" ? "#A020F0" : "#fff" },
          ]}
        >
          <Text style={styles.text}>K-drama</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={[
            styles.button,
            { borderColor: selectedTab == "J" ? "#A020F0" : "#fff" },
          ]}
        >
          <Text style={styles.text}>Romance</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
  },
  genreContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
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
