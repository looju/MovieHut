import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { MovieDetail } from "../Features/MovieDetails";
import { Home } from "../Features/Home";
const Stack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: true , headerTitleAlign:"center", headerTitle:"MovieHut", headerTitleStyle:{color:"#A020F0"}}}
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
    </Stack.Navigator>
  );
};
