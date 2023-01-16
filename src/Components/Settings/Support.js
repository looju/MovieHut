import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Linking,
  TouchableOpacity,
} from "react-native";

export const Support = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.text}>
          Do non deserunt nisi laborum exercitation quis cupidatat nisi
          voluptate cupidatat incididunt in veniam cupidatat. Deserunt sit enim
          minim qui. Mollit est est tempor minim sint fugiat. Commodo veniam
          exercitation anim minim. Mollit labore duis est ipsum. Non sunt
          incididunt id occaecat dolore nulla consequat ad. Excepteur enim non
          culpa excepteur sunt dolore est cupidatat velit non irure. Aute
          adipisicing anim ul
        </Text>
      </View>
      <TouchableOpacity
        style={styles.textView}
        onPress={() =>
          Linking.openURL(
            "mailto:omofade2019@gmail.com?subject=Recommendations and inquiry"
          )
        }
      >
        <Text style={styles.supportText}>Contact the development team</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  text: {
    color: "#fff",
  },
  supportText: {
    color: "#A020F0",
  },
  textView: {
    marginTop: 10,
  },
});
