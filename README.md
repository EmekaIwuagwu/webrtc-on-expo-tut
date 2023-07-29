# How to Use WebRTC on React native Expo

1.) First create Expo project 

```
 expo init webrtcProj
```

2.) install dependencies for RN expo webrtc

```
npx expo install react-native-webrtc @config-plugins/react-native-webrtc
```

3.) Add the plugins to app.json like this 

```
{
  "expo": {
    "plugins": [
      "@config-plugins/react-native-webrtc" <= add this here 
    ],
    "name": "webrtcomen",
    "slug": "webrtcomen",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bitcode": false
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "permissions": [
        "android.permission.ACCESS_NETWORK_STATE",
        "android.permission.BLUETOOTH",
        "android.permission.CAMERA",
        "android.permission.INTERNET",
        "android.permission.MODIFY_AUDIO_SETTINGS",
        "android.permission.RECORD_AUDIO",
        "android.permission.SYSTEM_ALERT_WINDOW",
        "android.permission.WAKE_LOCK"
      ],
      "package": "com.iwuagwuemmy.webrtcomen"
    },
    "web": {
      "favicon": "./assets/favicon.png"
    }
  }
}
```

4.) Compile project as native RN Project

```
npx expo run:android
```

You good to go!
