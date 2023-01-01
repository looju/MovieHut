import { StatusBar } from "expo-status-bar";
import { Carousel } from "./src/Carousel/Carousel";
import { Avatar } from "./src/UserSetup/Avatar";
import { ProfileName } from "./src/UserSetup/ProfileName";
import { UserProfileProvider } from "./src/Services/Providers/UserProfileProvider";
import { MainNavigator } from "./src/Navigation/MainNavigation/MainNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts,
  Oswald_400Regular,
  Lato_400Regular,
  Griffy_400Regular,
  Tangerine_400Regular,
  Arizonia_400Regular,
} from "@expo-google-fonts/dev";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Oswald_400Regular,
    Lato_400Regular,
    Griffy_400Regular,
    Tangerine_400Regular,
    Arizonia_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <UserProfileProvider>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Carousel" component={Carousel} />
            <Stack.Screen name="Avatar" component={Avatar} />
            <Stack.Screen name="ProfileName" component={ProfileName} />
            <Stack.Screen name="MainNavigator" component={MainNavigator} />
          </Stack.Navigator>
        </UserProfileProvider>
      </NavigationContainer>
    );
  }
}
