import React,{useState, useEffect} from "react";
import { View, StyleSheet, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { PopularService } from "../Services/Core/Popular";

export const Home = () => {

const [popular, setPopular]=useState([])
const [comingSooon, setComingSoon]=useState([])
const [topRated, setTopRated]=useState([])


useEffect(()=>{
   PopularService()
   .then((response)=>{
    console.log(response)
   })
   
})

  return (
    <View>
      <Text style={{ alignItems: "center", justifyContent: "center" }}>
        Home screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
