import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Video from "react-native-video";

export function VideoRun() {
  return (
    <View>
      <Text>Hello</Text>
      <Video
        // onError={this.onError}
        // onBuffer={this.onBuffer}
        // onProgress={this.onProgress}
        type="mp4"
        source={{ uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" }}
        // ref={(ref) => {
        //   this.player = ref;
        // }}
        style={styles.backgroundVideo}
        // minLoadRetryCount={5}
        // repeat
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundVideo: {
    // position: "absolute",
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
});
