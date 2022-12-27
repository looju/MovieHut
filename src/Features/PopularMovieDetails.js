import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Popular } from "../Services/Core/Popular";

export const PopularMovieDetails = ({route}) => {
const {data}=route.params

  

  return (

    <View style={styles.container}>
      <View style={styles.imageView}>
      <Image resizeMethod="scale" source={{uri:`${data.img}`}} style={styles.imageStyle}/>
      </View>
      <View style={styles.detailsView}>
      <View style={styles.titleView}>
        <Text style={styles.titleStyle}>{data.title}</Text>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:"#000"
},
imageView:{
    width:"50%",
    height:"45%",
    marginLeft:"25%"
},
imageStyle:{
    width:"100%",
    height:"100%"
},
detailsView:{
    backgroundColor:"#A020F0",
    flex:1,
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
},
titleView:{
    marginVertical:10,
    alignItems:"center",
    justifyContent:"center",
  
},
titleStyle:{
    color:"#fff"
}
});


