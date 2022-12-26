import { StatusBar } from 'expo-status-bar';
import { Carousel } from './src/Carousel/Carousel';
import { MainNavigator } from './src/MainNavigation/MainNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Carousel" component={Carousel} options={{headerShown:false}} />
    <Stack.Screen name="MainNavigator" component={MainNavigator} />
   
  </Stack.Navigator>
  </NavigationContainer>
  );
}

