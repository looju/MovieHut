import * as ScreenOrientation from "expo-screen-orientation";
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ResizeMode } from "expo-av";
import { setStatusBarHidden } from "expo-status-bar";
import React, { useRef, useState, useEffect } from "react";
import VideoPlayer from "expo-video-player";
import { Searchbar } from "react-native-paper";
import { Trailers } from "../Services/Core/Trailers";
import * as VideoThumbnails from "expo-video-thumbnails";

export const Trailer = () => {
  const [video, setVideo] = useState("Up");
  const [inFullscreen2, setInFullsreen2] = useState(false);
  const [isMute, setIsMute] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);
  const refVideo2 = useRef(null);
  const refScrollView = useRef(null);

  const generateThumbnail = async () => {
    try {
      const { uri } = await VideoThumbnails.getThumbnailAsync(
        `${Trailers.video}`,
        {
          time: 15000,
        }
      );
      setThumbnail(uri);
    } catch (e) {
      console.warn(e);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.container}>
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
    </View>
  );

  useEffect(() => {
    generateThumbnail();
  }, []);

  return (
    <View style={styles.container}>
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
            onChangeText={(text) => setVideo(text)}
            onSubmitEditing={() => handleSearch(video)}
            value={"Black Panther"}
            style={{ backgroundColor: "#808080" }}
            inputStyle={{ color: "#fff" }}
          />
        </View>
        <FlatList
          data={Trailers}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
