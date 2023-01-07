import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import { Button } from "react-native-paper";

export const Home = ({navigation}) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../../../../assets/home.jpg")}
      resizeMode="cover"
      resizeMethod="auto"
    >
      <View style={styles.buttonContainer}>
        <View style={styles.buttonView}>
          <Button name="Login" icon="login" onPress={()=>navigation.navigate("Login")}>
            Login
          </Button>
        </View>
        <View style={styles.buttonView}>
          <Button name="Register" icon="account-lock-open-outline" onPress={()=>navigation.navigate("Register")}>
            Register
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    width: 150,
    height: 150,
    borderRadius: 5,
    borderColor: "#A020F0",
    borderWidth: 2,
    marginTop: Dimensions.get("screen").height * 0.5,
    marginLeft: Dimensions.get("screen").width * 0.35,
    justifyContent: "space-evenly",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  button: {
    borderRadius: 5,
    borderColor: "#A020F0",
    borderWidth: 2,
    marginVertical: 2,
    height: 50,
  },
  buttonView:{
    borderRadius: 10,
    borderColor: "#fff",
    borderWidth: 2,
  }
});
