import * as ScreenOrientation from "expo-screen-orientation";
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { ResizeMode } from "expo-av";
import { setStatusBarHidden } from "expo-status-bar";
import React, { useRef, useState, useEffect } from "react";
import VideoPlayer from "expo-video-player";
import { Searchbar } from "react-native-paper";
import { Trailers } from "../Services/Core/Trailers";
import * as VideoThumbnails from "expo-video-thumbnails";
import LottieView from "lottie-react-native";

export const Trailer = ({ navigation }) => {
  const [video, setVideo] = useState("Up");
  const [inFullscreen2, setInFullsreen2] = useState(false);
  const [isMute, setIsMute] = useState(false);
  const [playList, setPlayList] = useState([]);
  const refVideo2 = useRef(null);
  const refScrollView = useRef(null);

  const fetchPlayListData = async () => {
    await fetch(
      "https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PLTovKDoAy18KZ6sUQcmK2RDQeYkm2xUNt&maxResults=10&part=snippet%2CcontentDetails&key=AIzaSyADfJEcp593ixdIiy9LNEePFBRb9akgkIY",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setPlayList(data))
      .catch((error) => console.log("Error fetching youtube data" + error));
  };

  useEffect(() => {
    fetchPlayListData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.GridViewContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("WatchTrailer")}>
        <Image
          style={styles.image}
          source={{ uri: `${item.snippet.thumbnails.medium.url}` }}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {playList.length == 0 && (
        <View style={styles.lottie}>
          <LottieView
            source={require("../../assets/movie2.json")}
            style={styles.lottieStyle}
            autoPlay
            loop
          />
        </View>
      )}
      <ScrollView
        scrollEnabled={!inFullscreen2}
        ref={refScrollView}
        onContentSizeChange={() => {
          if (inFullscreen2) {
            refScrollView.current.scrollToEnd({ animated: true });
          }
        }}
        style={styles.container}
      >
        <View style={styles.searchBarView}>
          <Searchbar
            placeholder="Search movie trailers"
            value={"Trailer"}
            style={{ backgroundColor: "#808080" }}
            inputStyle={{ color: "#fff" }}
          />
        </View>
        <View>
          <FlatList
            data={playList.items}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  GridViewContainer: {
    flex: 1,
    height: 200,
    margin: 2,
    backgroundColor: "#000",
  },
  searchBarView: {
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    marginTop: 36,
    marginBottom: 12,
  },
  titleView: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
  },
  titleStyle: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "Lato_400Regular",
  },
  pictureStyle: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  image: {
    height: 200,
  },
  lottie: {
    height: Dimensions.get("screen").height,
    alignItems: "center",
    justifyContent: "center",
  },
  lottieStyle: {
    height: 200,
    width: 200,
  },
});

// const generateThumbnail = async () => {
//   try {
//     const { uri } = await VideoThumbnails.getThumbnailAsync(
//       `${Trailers.video}`,
//       {
//         time: 15000,
//         quality: 1,
//       }
//     );
//     setThumbnail(uri);
//   } catch (e) {
//     console.warn(e);
//   }
// };

{
  /* <View style={styles.container}>
<VideoPlayer
  videoProps={{
    shouldPlay: false,
    resizeMode: ResizeMode.COVER,
    source: {
      uri: `${item.video}`,
    },
    ref: refVideo2,
  }}
  fullscreen={{
    inFullscreen: inFullscreen2,
    enterFullscreen: async () => {
      setStatusBarHidden(true, "fade");
      setInFullsreen2(!inFullscreen2);
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
      );
      refVideo2.current.setStatusAsync({
        shouldPlay: true,
      });
    },
    exitFullscreen: async () => {
      setStatusBarHidden(false, "fade");
      setInFullsreen2(!inFullscreen2);
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.DEFAULT
      );
    },
  }}
  mute={{
    enterMute: () => setIsMute(!isMute),
    exitMute: () => setIsMute(!isMute),
    isMute,
  }}
  style={{
    videoBackgroundColor: "#ffff",
    height: inFullscreen2 ? Dimensions.get("window").width : 250,
    width: inFullscreen2 ? Dimensions.get("window").height : 400,
  }}
/>


<View style={styles.titleView}>
  <Text style={styles.titleStyle}>{video.toLocaleUpperCase()}</Text>
</View>
</View> <View style={styles.container}>
      <VideoPlayer
        videoProps={{
          shouldPlay: false,
          resizeMode: ResizeMode.COVER,
          source: {
            uri: `${item.video}`,
          },
          ref: refVideo2,
        }}
        fullscreen={{
          inFullscreen: inFullscreen2,
          enterFullscreen: async () => {
            setStatusBarHidden(true, "fade");
            setInFullsreen2(!inFullscreen2);
            await ScreenOrientation.lockAsync(
              ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
            );
            refVideo2.current.setStatusAsync({
              shouldPlay: true,
            });
          },
          exitFullscreen: async () => {
            setStatusBarHidden(false, "fade");
            setInFullsreen2(!inFullscreen2);
            await ScreenOrientation.lockAsync(
              ScreenOrientation.OrientationLock.DEFAULT
            );
          },
        }}
        mute={{
          enterMute: () => setIsMute(!isMute),
          exitMute: () => setIsMute(!isMute),
          isMute,
        }}
        style={{
          videoBackgroundColor: "#ffff",
          height: inFullscreen2 ? Dimensions.get("window").width : 250,
          width: inFullscreen2 ? Dimensions.get("window").height : 400,
        }}
      />
      <View style={styles.titleView}>
        <Text style={styles.titleStyle}>{video.toLocaleUpperCase()}</Text>
      </View>
    </View> */
}
