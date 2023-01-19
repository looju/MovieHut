import React, { useContext, useState, useEffect } from "react";
import { Avatar } from "react-native-paper";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Pressable,
  Modal,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Authorization } from "../Services/Core/Auth/Auth";

export const Settings = ({ navigation }) => {
  const { SignOut, user } = useContext(Authorization);
  const [photo, setPhoto] = useState(null);
  const [modalVisible, setModalVisible] = useState(true);
  const [warning, setWarning] = useState(false);

  const getCameraPhoto = async () => {
    try {
      const value = await AsyncStorage.getItem(`${user.uid}-photo`);
      if (value !== null) {
        setPhoto(value);
      }
    } catch (e) {
      console.log("problem at settings with image:" + e);
    }
  };

  const getGalleryPhoto = async () => {
    try {
      const value = await AsyncStorage.getItem(`${user.uid}-galleryphoto`);
      if (value !== null) {
        setPhoto(value);
      }
    } catch (e) {
      console.log("problem at settings with gallery image:" + e);
    }
  };

  useEffect(() => {
    getCameraPhoto();
    getGalleryPhoto();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.pictureView}
        onPress={() => navigation.navigate("Camera")}
      >
        {photo && (
          <Avatar.Image
            size={180}
            source={{ uri: photo }}
            style={{ alignItems: "center", left: 10, top: 10 }}
          />
        )}
        {!photo && (
          <Avatar.Icon
            size={180}
            icon="account-circle"
            color="#fff"
            style={{ backgroundColor: "#000", left: 10 }}
          />
        )}
      </TouchableOpacity>
      <View style={styles.email}>
        <Text style={styles.emailText}>john98@gmail.com</Text>
      </View>

      <TouchableOpacity
        style={styles.settings}
        onPress={() => navigation.navigate("About")}
      >
        <View>
          <Text style={styles.otherText}>About</Text>
        </View>
        <View>
          <MaterialCommunityIcons color="#fff" size={25} name="menu-right" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.settings}
        onPress={() => navigation.navigate("Legal")}
      >
        <View>
          <Text style={styles.otherText}>Legal</Text>
        </View>
        <View>
          <MaterialCommunityIcons color="#fff" size={25} name="menu-right" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.settings}
        onPress={() => navigation.navigate("Support")}
      >
        <View>
          <Text style={styles.otherText}>Support</Text>
        </View>
        <View>
          <MaterialCommunityIcons color="#fff" size={25} name="menu-right" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.settings}
        onPress={() => setWarning(true)}
      >
        <View>
          <Text style={styles.otherText}>SignOut</Text>
        </View>
        <View>
          <MaterialCommunityIcons color="#fff" size={25} name="menu-right" />
        </View>
      </TouchableOpacity>
      {warning && (
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                  Are you sure you want to sign out from MovieHut?
                </Text>
                <View style={styles.permissions}>
                  <View style={styles.pressable}>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => SignOut()}
                    >
                      <Text style={styles.textStyle}>Yes</Text>
                    </Pressable>
                  </View>

                  <View style={styles.pressable}>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <Text style={styles.textStyle}>No</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  pictureView: {
    width: 200,
    height: 200,
    borderRadius: 100,
    left: Dimensions.get("screen").width * 0.3,
    marginTop: 10,
    borderTopColor: "#A020F0",
    borderRightColor: "#FF0000",
    borderLeftColor: "#FFF",
    borderBottomColor: "#FF0",
    borderWidth: 2,
  },
  email: {
    left: 15,
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  emailText: {
    color: "#fff",
    fontFamily: "Oswald_400Regular",
    fontSize: 15,
  },
  settings: {
    marginTop: 20,
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("screen").width,
  },
  otherText: {
    color: "#fff",
    fontFamily: "Oswald_400Regular",
    fontSize: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
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
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#A020F0",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  permissions: {
    flexDirection: "row",
  },
  pressable: {
    marginHorizontal: 10,
    width: 50,
    height: 50,
  },
});
