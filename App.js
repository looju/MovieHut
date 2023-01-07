import { UserProfileProvider } from "./src/Services/Providers/UserProfileProvider";
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/Navigation/index";
import {
  useFonts,
  Oswald_400Regular,
  Lato_400Regular,
  Griffy_400Regular,
  Tangerine_400Regular,
  Arizonia_400Regular,
} from "@expo-google-fonts/dev";


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
          <Navigation />
        </UserProfileProvider>
      </NavigationContainer>
    );
  }
}
