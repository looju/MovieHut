import * as ScreenOrientation from "expo-screen-orientation";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { ResizeMode } from "expo-av";
import { setStatusBarHidden } from "expo-status-bar";
import React, { useRef, useState } from "react";
import VideoPlayer from "expo-video-player";
import {SearchBar} from 'react-native-paper'

export const Trailer = () => {
  const [movieTrailer, setMovieTrailer] = useState(false);
  const [inFullscreen2, setInFullsreen2] = useState(false);
  const [isMute, setIsMute] = useState(false);
  const refVideo2 = useRef(null);
  const refScrollView = useRef(null);

  return (
    <ScrollView
      scrollEnabled={!inFullscreen2}
      ref={refScrollView}
      onContentSizeChange={() => {
        if (inFullscreen2) {
          refScrollView.current.scrollToEnd({ animated: true });
        }
      }}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
       <Text style={styles.text}>Fullscren</Text>
       <View style={styles.container}>
      <VideoPlayer
        videoProps={{
          shouldPlay: false,
          resizeMode: ResizeMode.COVER,
          source: {
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
          },
          ref: refVideo2,
        }}
        fullscreen={{
          inFullscreen: inFullscreen2,
          enterFullscreen: async () => {
            setStatusBarHidden(true, 'fade')
            setInFullsreen2(!inFullscreen2)
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT)
            refVideo2.current.setStatusAsync({
              shouldPlay: true,
            })
          },
          exitFullscreen: async () => {
            setStatusBarHidden(false, 'fade')
            setInFullsreen2(!inFullscreen2)
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
          },
        }}
        mute={{
          enterMute: () => setIsMute(!isMute),
          exitMute: () => setIsMute(!isMute),
          isMute,
        }}
        style={{
          videoBackgroundColor: '#A020F0',
          height: inFullscreen2 ? Dimensions.get('window').width : 250,
          width: inFullscreen2 ? Dimensions.get('window').height : 400,
        }}
      />
      </View>

     

     

     
      
     

      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#808080",
    flex:1,
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  text: {
    marginTop: 36,
    marginBottom: 12,
  },
});
