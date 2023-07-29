import React, { useState } from "react";
import { Button, SafeAreaView, View } from "react-native";
import { mediaDevices, RTCView } from "react-native-webrtc";

const App = () => {
  const [stream, setStream] = useState(null);
  const start = async () => {
    if (!stream) {
      let s;
      try {
        s = await mediaDevices.getUserMedia({ video: true });
        setStream(s);
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <>
      <SafeAreaView>
        {stream && <RTCView style={{height: 550, width: '100%'}} zOrder={20} objectFit={"cover"} mirror={true} streamURL={stream.toURL()} />}
        <View>
          <Button title="Start" onPress={start} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
