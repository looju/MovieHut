import * as LocalAuthentication from "expo-local-authentication";
import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Text,
  Dimensions,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const FingerprintAuthScreen = ({ navigation }) => {
  const [hardware, setHardware] = useState(false);
  const [bioValue, setBioValue] = useState(false);

  useEffect(() => {
    (async () => {
      const ifDeviceScannerExists = LocalAuthentication.hasHardwareAsync();
      if (ifDeviceScannerExists) {
        setHardware(true);
      }
      const ifBioExists = LocalAuthentication.isEnrolledAsync();
      if (ifBioExists) {
        setBioValue(true);
      }
    })();
  }, []);

  const handleAuth = async () => {
    try {
      const biometricAuth = await LocalAuthentication.authenticateAsync({
        promptMessage: "Authenticate",
        disableDeviceFallback: true,
        cancelLabel: "Cancel",
      });
      if (biometricAuth.success) {
        navigation.replace("MainNavigator");
      }
    } catch (error) {
      console.log(error);
      Alert.alert(error);
    }
  };

  return (
    <View style={styles.container}>
      {bioValue && hardware ? (
        <View>
          <View style={styles.authTextView}>
            <Text style={styles.authText}>Authenticate with biometric</Text>
          </View>
          <View style={styles.authContainer}>
            <TouchableOpacity onPress={handleAuth}>
              <MaterialCommunityIcons
                color="#A020F0"
                size={65}
                name="fingerprint"
              />
            </TouchableOpacity>
            
          </View>
        </View>
      ) : (
        <View>
          <Text style={styles.text}>
            {" "}
            Looks like no biometric device exists on your device
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontFamily: "Lato_400Regular",
    fontSize: 20,
  },
  authTextView: {
    width: Dimensions.get("screen").width,
    alignItems: "center",
    justifyContent:"center",
    marginBottom: 50,
  },
  authText: {
    color: "#fff",
    fontFamily: "Oswald_400Regular",
  },
  authContainer: {
    width: Dimensions.get("screen").width ,
    heigth: Dimensions.get("screen").height * 0.4,
    alignItems: "center",
    justifyContent:"center"
  },
});
