import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export const ShowAnimeTrailer = ({ data }) => {
  const [trailer, setTrailer] = useState([]);

  const SearchAnimeVideos = async () => {
    await fetch(`https://api.jikan.moe/v4/anime/${data.mal_id}/videos`)
      .then((res) => res.json())
      .then((data) => setTrailer(data))
      .catch((error) => {
        console.log("error at ShowAnimeTrailer.js " + error);
      });
  };

  useEffect(() => {
    SearchAnimeVideos();
  }, []);


console.log(trailer)

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
          height={650}
          width={Dimensions.get("screen").width}
          play={true}
         videoId={trailer.promo.trailer.youtube_id}
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
