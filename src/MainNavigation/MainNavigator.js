import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { HomeNavigator } from "../HomeNavigator/HomeNavigator";
import {Trailer } from "../Features/Trailer";
import { Search } from "../Features/Search";

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
          } else if (route.name === "Search") {
            iconName = "text-search";
            color = focused ? "#A020F0" : "#808080";
          } else if (route.name === "Trailers") {
            iconName = "clipboard-play-multiple";
            color = focused ? "#A020F0" : "#808080";
          }

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeNavigator} options={{headerShown:false}}/>
      <Tab.Screen name="Search" component={Search} options={{headerShown:false}}/>
      <Tab.Screen name="Trailers" component={Trailer}  options={{headerShown:false}}/>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
