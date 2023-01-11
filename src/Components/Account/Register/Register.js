import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Modal,
  Pressable,
} from "react-native";
import { Button } from "react-native-paper";
import { Authorization } from "../../../Services/Core/Auth/Auth";

export const Register = ({ navigation }) => {
  const { error, isLoading, SignUp, alert } = useContext(Authorization);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
 const [modalVisible,setModalVisible] = useState(true)
  return (
    <ImageBackground
      style={styles.container}
      source={require("../../../../assets/register2.jpg")}
      resizeMode="cover"
    >
      {alert && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onDismiss={() => {
            setModalVisible(false)
          }}
          
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Suceess! Account successfully created</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => navigation.goBack()}
              >
                <Text style={styles.textStyle}>Good!</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}
      <View style={styles.buttonContainer}>
        <TextInput
          label="Email"
          placeholder="Enter email address"
          placeholderTextColor="#A020F0"
          value={email}
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          autoComplete="email"
          style={styles.input}
        />
        <TextInput
          label="Password"
          placeholder="Enter password"
          placeholderTextColor="#A020F0"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          blurOnSubmit
          autoComplete="password"
          maxLength={20}
          style={styles.input}
        />
        <TextInput
          label="Repeat password"
          placeholder="Enter password again"
          placeholderTextColor="#A020F0"
          value={repeatPassword}
          onChangeText={(text) => setRepeatPassword(text)}
          secureTextEntry
          blurOnSubmit
          autoComplete="password"
          maxLength={20}
          style={styles.input}
        />
        <View style={styles.errorView}>
          {error && <Text style={styles.error}> {error}</Text>}
          {isLoading && <ActivityIndicator size={25} color="#A020F0" />}
        </View>
        <Button
          name="Login"
          icon="login"
          textColor="#A020F0"
          onPress={() => SignUp(email, password, repeatPassword)}
        >
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor:"rgba(0,0,0,0.5)"
  },
  modalView: {
    margin: 20,
    backgroundColor: "#A020F0",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    borderColor:"#fff",
    borderWidth:2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "white",
  },
});
