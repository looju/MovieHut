import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Carousel } from "../../Components/Account/Carousel/Carousel";
import { Login } from "../../Components/Account/Login/Login";
import { Register } from "../../Components/Account/Register/Register";
import { Home } from "../../Components/Account/Home/Home";

const Stack = createStackNavigator();

export const AccountNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Carousel" component={Carousel} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  </NavigationContainer>
);
