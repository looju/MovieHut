import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { TextInput, Button } from "react-native-paper";

export const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  return (
    <ImageBackground
      style={styles.container}
      source={require("../../../../assets/register2.jpg")}
      resizeMode="cover"
    >
      <View style={styles.buttonContainer}>
        <TextInput
          label="Email"
          placeholder="Enter email address"
          value={email}
          onChangeText={(text) => setEmail(text)}
          multiline
          style={{ width: 200, left: 25 }}
          left={<TextInput.Icon icon="email" />}
        />
        <TextInput
          label="Password"
          placeholder="Enter password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          multiline
          secureTextEntry
          style={{ width: 200, left: 25 }}
          left={<TextInput.Icon icon="eye" />}
        />
        <TextInput
          label="Repeat password"
          placeholder="Enter password again"
          value={repeatPassword}
          onChangeText={(text) => setRepeatPassword(text)}
          multiline
          secureTextEntry
          style={{ width: 200, left: 25 }}
          left={<TextInput.Icon icon="eye" />}
        />
        <Button name="Login" icon="login" textColor="#A020F0">
          Register
        </Button>
      </View>
      <View style={styles.noAccount}>
        <View style={styles.question}>
          <Text style={styles.questionText}>Already have an account?</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.registerText}>Login</Text>
          </TouchableOpacity>
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
    width: 250,
    height: 250,
    borderRadius: 5,
    backgroundColor: "rgba(0,0,0,0.5)",
    marginTop: Dimensions.get("screen").height * 0.3,
    marginLeft: Dimensions.get("screen").width * 0.2,
    justifyContent: "space-evenly",
  },
  noAccount: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  question: {
    marginRight: 10,
  },
  questionText: {
    color: "#fff",
    fontWeight: "500",
  },
  registerText: {
    color: "#A020F0",
    fontWeight: "500",
  },
});
