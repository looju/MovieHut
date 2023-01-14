import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { FingerprintAuthScreen } from "../AppNavigator/FingerPrint/FingerprintAuthScreen";
import { MainNavigator } from "../AppNavigator/MainNavigator/MainNavigator";

const Stack = createStackNavigator();

export const AuthNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Finger" component={FingerprintAuthScreen} />
    <Stack.Screen name="MainNavigator" component={MainNavigator} />
  </Stack.Navigator>
);
