import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { AvatarImages } from "../Services/Core/AvatarImages";

export const Avatar = ({navigation}) => {
  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <TouchableOpacity
        onPress={()=>navigation.navigate("ProfileName",{data:item})}
        >
          <Image
            source={{ uri: `${item.image}` }}
            style={{
                width: 150,
                height: 150,
                borderRadius: 75,
              borderColor:"#fff"
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  const header = () => (
    <View>
      <View style={styles.picture}>
        <Image source={require("../../assets/display.png")} />
      </View>
      <View style={styles.title}>
        <Text style={styles.titleStyle}>Choose your avatar</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={AvatarImages}
        renderItem={renderItem}
        ListHeaderComponent={header}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  picture: {
    top: Dimensions.get("screen").height * 0.05,
    width: Dimensions.get("screen").width * 0.4,
    left: Dimensions.get("screen").width * 0.3,
    height: Dimensions.get("screen").height * 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  titleStyle: {
    fontSize: 25,
    fontFamily: "Griffy_400Regular",
    color: "#fff",
  },
  avatar: {
    backgroundColor: "#fff",
    width: 150,
    height: 150,
    borderRadius: 75,
    left: Dimensions.get("screen").width * 0.05,
    borderRadius: Dimensions.get("screen").height * 0.2,
    marginBottom: 10,
  },
});
