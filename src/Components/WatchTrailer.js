import React, { useRef, useState } from "react";
import { View, StyleSheet, Dimensions, Text, ScrollView } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";


export const WatchTrailer = ({ route }) => {
  const { data } = route.params;

  const onStateChange = (state) => {
    if (state === "ended") {
      setPlaying(false);

      Alert.alert("Want to watch another trailer?!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.video}>
        <YoutubePlayer
          height={Dimensions.get("screen").height * 0.9}
          width={Dimensions.get("screen").width}
          play={true}
          videoId={"84WIaK3bl_s"}
          onChangeState={onStateChange}
          webViewProps={{
            injectedJavaScript: `
              var element = document.getElementsByClassName('container')[0];
              element.style.position = 'unset';
              element.style.paddingBottom = 'unset';
              true;
            `,
          }}
        />

        <View style={{ marginVertical: 10, flexDirection: "row" }}>
          <Text
            style={{
              color: "#A020F0",
              fontSize: 20,
              fontFamily: "Lato_400Regular",
            }}
          >
            Title:{" "}
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontFamily: "Griffy_400Regular",
            }}
          >
            {data.snippet.title}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  video: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height * 0.9,
    backgroundColor: "#000",
    marginBottom: 20,
  },
  controlContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

// import VideoPlayer from "expo-video-player";
// import { ResizeMode } from "expo-av";
// import * as ScreenOrientation from "expo-screen-orientation";

// const [inFullscreen2, setInFullsreen2] = useState(false);
//   const refScrollView = useRef(null);
//   const refVideo2 = useRef(null);
//   const [isMute, setIsMute] = useState(false);

{
  /* <ScrollView
          scrollEnabled={!inFullscreen2}
          ref={refScrollView}
          onContentSizeChange={() => {
            if (inFullscreen2) {
              refScrollView.current.scrollToEnd({ animated: true });
            }
          }}
          style={styles.container}
        >
         
        </ScrollView> */
}

{
  /* <VideoPlayer
videoProps={{
  shouldPlay: false,
  isLooping:true,
  resizeMode: ResizeMode.COVER,
  visible: true,
  defaultControlsVisible:true,
  timeVisible:true,
  source: {
    uri: 'https://www.youtube.com/embed/UkRBLb7xn0E',
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
  videoBackgroundColor: "#808080",
  height: inFullscreen2 ? Dimensions.get("window").width : 250,
  width: inFullscreen2 ? Dimensions.get("window").height : 400,
}}
/> */
}
