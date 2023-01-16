import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { Trailer } from "../../../Features/Trailer";
import { Anime } from "../../../Features/Anime";
import { Discover } from "../../../Features/Discover";
import { ScreenDetailsNavigator } from "../ScreenDetailsNavigator/ScreenDetailsNavigator";
import { SettingsNavigation } from "../SettingsNavigator/SettingsNavigation";

const Tab = createBottomTabNavigator();

export const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "movie-open-plus";
            color = focused ? "#A020F0" : "#808080";
          } else if (route.name === "Anime") {
            iconName = "filmstrip-box-multiple";
            color = focused ? "#A020F0" : "#808080";
          } else if (route.name === "Watch") {
            iconName = "clipboard-play-multiple";
            color = focused ? "#A020F0" : "#808080";
          } else if (route.name === "Discover") {
            iconName = "cookie-clock";
            color = focused ? "#A020F0" : "#808080";
          } else if (route.name === "Settings") {
            iconName = "cog-outline";
            color = focused ? "#A020F0" : "#808080";
          }

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "#000" },
      })}
    >
      <Tab.Screen
        name="Home"
        component={ScreenDetailsNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Anime"
        component={Anime}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTitle: "Discover",
          headerStyle: { backgroundColor: "#000" },
          headerTitleStyle: { color: "#A020F0" },
        }}
      />
      <Tab.Screen
        name="Watch"
        component={Trailer}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsNavigation}
        options={{
          headerShown: false,
       
        }}
      />
    </Tab.Navigator>
  );
};
