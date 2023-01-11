import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ActivityIndicator
} from "react-native";
import { Authorization } from "../../../Services/Core/Auth/Auth";
import { Button } from "react-native-paper";

export const Login = ({ navigation }) => {
  const { Login, error, isLoading } = useContext(Authorization);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ImageBackground
      style={styles.container}
      source={require("../../../../assets/login.jpg")}
      resizeMode="cover"
    >
      <View style={styles.buttonContainer}>
        <TextInput
          label="Email"
          placeholder="Enter email address"
          value={email}
          onChangeText={(text) => setEmail(text)}
          multiline
          autoComplete="email"
          style={styles.input}
        />
        <TextInput
          label="Password"
          placeholder="Enter password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          autoComplete="password"
          blurOnSubmit
          style={styles.input}
        />
        <Button
          name="Login"
          icon="login"
          onPress={() => Login(email, password)}
        >
          Login
        </Button>
        <View style={styles.errorView}>
          {error && <Text style={styles.error}> {error}</Text>}
          {isLoading && <ActivityIndicator size={25} color="#A020F0" />}
        </View>
      </View>
      <View style={styles.noAccount}>
        <View style={styles.question}>
          <Text style={styles.questionText}>Dont have an account?</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.registerText}>Register</Text>
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
  error: {
    color: "#FF0000",
    fontFamily: "Lato_400Regular",
    fontWeight: "500",
  },
  errorView: {
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#fff",
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: "#fff",
  },
});
