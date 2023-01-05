import React from "react";
import { Image } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { LatestDetail } from "../../Components/Home/Latest/Components/LatestDetails";
import { PopularMovieDetails } from "../../Components/Home/Popular/Component/PopularMovieDetails";
import { AnimeDetails } from "../../Components/Anime/AnimeDetails";
import { TrendingDetails} from "../../Components/Home/Trending/Screen/TrendingDetails";
import { TvShowDetails } from "../../Components/Home/Discover/Component/TvShowDetails";
import { WatchTrailer } from "../../Components/Watch/Screen/WatchTrailer";
import { SimilarMovies } from "../../Components/Home/General/SimilarMovies";
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
        name="LatestDetail"
        component={LatestDetail}
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
        name="TrendingDetails"
        component={TrendingDetails}
        options={{
          ...TransitionPresets.RevealFromBottomAndroid,
          ...TransitionPresets.ModalSlideFromBottomIOS,
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="TvShowDetails"
        component={TvShowDetails}
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
       <Stack.Screen
        name="SimilarMovies"
        component={SimilarMovies}
        options={{
          ...TransitionPresets.DefaultTransition,
          ...TransitionPresets.ModalSlideFromBottomIOS,
          headerShown: true,
          headerTitleAlign: "center",
          headerTitle: "Similar movies",
          headerStyle:{backgroundColor:"#000"},
          headerTitleStyle: { color: "#A020F0" },
        }}
      />
        <Stack.Screen
        name="WatchTrailer"
        component={WatchTrailer}
        options={{
          ...TransitionPresets.ScaleFromCenterAndroid,
          ...TransitionPresets.ModalSlideFromBottomIOS,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
