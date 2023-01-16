import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { About } from "../../../Components/Settings/About";
import { Support } from "./../../../Components/Settings/Support";
import { Legal } from "./../../../Components/Settings/Legal";
import { Settings } from "../../../Features/Settings";
import { CameraScreen } from "../../../Components/Camera/Camera";

const Stack = createStackNavigator();

export const SettingsNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
     <Stack.Screen
      name="Settings"
      component={Settings}
      options={{
        headerShown: true,
        headerTitleAlign: "center",
        headerTitle: "Settings",
        headerStyle: { backgroundColor: "#000" },
        headerTitleStyle: { color: "#A020F0" },
      }}
    />
    <Stack.Screen
      name="About"
      component={About}
      options={{
        headerShown: true,
        headerTitleAlign: "center",
        headerTitle: "About",
        headerStyle: { backgroundColor: "#000" },
        headerTitleStyle: { color: "#A020F0" },
      }}
    />
    <Stack.Screen
      name="Legal"
      component={Legal}
      options={{
        headerShown: true,
        headerTitleAlign: "center",
        headerTitle: "Legal",
        headerStyle: { backgroundColor: "#000" },
        headerTitleStyle: { color: "#A020F0" },
      }}
    />
    <Stack.Screen
      name="Support"
      component={Support}
      options={{
        headerShown: true,
        headerTitleAlign: "center",
        headerTitle: "Support",
        headerStyle: { backgroundColor: "#000" },
        headerTitleStyle: { color: "#A020F0" },
      }}
    />
     <Stack.Screen
      name="Camera"
      component={CameraScreen}
      options={{
        headerShown: false
      }}
    />
  </Stack.Navigator>
);
