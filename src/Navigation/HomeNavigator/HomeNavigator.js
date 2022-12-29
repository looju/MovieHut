import React from "react";
import { Image } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { MovieDetail } from "../../Features/MovieDetails";
import { PopularMovieDetails } from "../../Features/PopularMovieDetails";
import { AnimeDetails } from "../../Features/AnimeDetails";
import { Home } from "../../Features/Home";
const Stack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTitle: "MovieHut",
          headerTitleStyle: { color: "#A020F0" },
          headerLeft: () => (
            <Image
              source={require("../../../assets/display.png")}
              style={{ width: 50, height: 50,  }}
            />
          ),
          headerLeftContainerStyle: { width: 50, height: 50, left:20 },
          headerStyle:{backgroundColor:"#000"}
        }}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetail}
        options={{
          ...TransitionPresets.RevealFromBottomAndroid,
          ...TransitionPresets.ModalSlideFromBottomIOS,
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="PopularMovieDetails"
        component={PopularMovieDetails}
        options={{
          ...TransitionPresets.RevealFromBottomAndroid,
          ...TransitionPresets.ModalSlideFromBottomIOS,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AnimeDetails"
        component={AnimeDetails}
        options={{
          ...TransitionPresets.ModalTransition,
          ...TransitionPresets.ModalSlideFromBottomIOS,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
