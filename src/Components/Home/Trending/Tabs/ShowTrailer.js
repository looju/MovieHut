import React from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export const ShowTrailer = ({ trailer }) => {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          width: Dimensions.get("screen").width,
          height: Dimensions.get("screen").height * 0.4,
        }}
      >
        <YoutubePlayer
          height={Dimensions.get("screen").height*0.4}
          width={Dimensions.get("screen").width}
          play={true}
          videoId={trailer.trailers[0].youtube}
          webViewProps={{
            injectedJavaScript: `
              var element = document.getElementsByClassName('container')[0];
              element.style.position = 'unset';
              element.style.paddingBottom = 'unset';
              true;
            `,
          }}
        />
      </View>
    </ScrollView>
  );
};
