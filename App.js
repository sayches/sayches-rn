import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import FeedScreen from "./app/screens/feed/Feed";
import Constants from "expo-constants";
const statusBarHeight = Constants.statusBarHeight;

import { Provider } from "react-redux";
import { createStore } from "redux";
import { postReducer } from "./app/store/reducers";
// Font Family //
const fetchFont = () => {
  return Font.loadAsync({
    "Poppins-Regular": require("./app/assets/fonts/poppins/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./app/assets/fonts/poppins/Poppins-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => alert(err)}
      />
    );
  }

  return (
    <Provider store={createStore(postReducer)}>
      <View style={styles.app}>
        <FeedScreen />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  app: {
    marginTop: statusBarHeight,
  },
});
