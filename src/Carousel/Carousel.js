import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import AppIntroSlider from "react-native-app-intro-slider";

export const Carousel = ({ navigation }) => {
  const slides = [
    {
      key: "one",
      title: "Catch up on your favourite movie",
      text: "Find all your favourite feature films",
      image: require("../../assets/film.jpg"),
      backgroundColor: "#000",
    },
    {
      key: "two",
      title: "See movies of your best casts",
      text: "Find movies on your best actors and actresses",
      image: require("../../assets/actor.jpg"),
      backgroundColor: "#964B00",
    },
    {
      key: "three",
      title: "Find your favourite shows",
      text: "Search for upcoming cartoons and tv shows",
      image: require("../../assets/cartoon.jpg"),
      backgroundColor: "#808080",
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <ImageBackground
        style={[styles.container]}
        source={item.image}
        resizeMode="cover"
      >
        <View style={styles.title}>
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            {item.title}
          </Text>
        </View>
        <View style={styles.text}>
          <Text style={{ color: "#fff", fontWeight: "600", fontSize: 15 }}>
            {item.text}
          </Text>
        </View>
      </ImageBackground>
    );
  };

  const renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="arrow-forward-outline"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };
  const renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon name="md-checkmark" color="rgba(255, 255, 255, .9)" size={24} />
      </View>
    );
  };

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      onDone={() => navigation.navigate("MainNavigator")}
      onSkip={() => navigation.navigate("MainNavigator")}
      renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
      showSkipButton
    />
  );
};

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0, 0, 0, .2)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  title: {
    marginTop: 50,
    width: 300,
    heigth: 100,
  },
  text: {
    width: 400,
    maxHeight: 200,
    top:"75%"
  },
  image: {
    flex: 1,
    left: 20,
    marginTop: 200,
  },
});
