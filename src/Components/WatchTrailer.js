import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

export const WatchTrailer = () => {
    return (
        <View style={styles.container}>
            <View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:"#000"
},
video:{
width:Dimensions.get("screen").width,
height:Dimensions.get("screen").height*0.5,
marginTop:10
}
})

