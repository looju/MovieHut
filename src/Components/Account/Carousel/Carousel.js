import React from "react";
import { StyleSheet, View, Text, ImageBackground, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import AppIntroSlider from "react-native-app-intro-slider";

export const Carousel = ({ navigation }) => {
  const slides = [
    {
      key: "one",
      text: "Find all your favourite feature films",
      image: require("../../assets/film.jpg"),
      backgroundColor: "#000",
    },
    {
      key: "two",
      text: "Find movies on your best actors and actresses",
      image: require("../../assets/actor.jpg"),
      backgroundColor: "#964B00",
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <ImageBackground
        style={[styles.container]}
        source={item.image}
        resizeMode="cover"
      >
        <View style={styles.text}>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
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
      onDone={() => navigation.navigate("Avatar")}
      onSkip={() => navigation.navigate("Avatar")}
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
  text: {
    top:Dimensions.get("screen").height*0.8,
    alignItems:"center",
  },
  image: {
    flex: 1,
    left: 20,
    marginTop: 200,
  },
});
