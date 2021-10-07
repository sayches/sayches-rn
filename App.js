import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import FeedScreen from "./app/screens/feed/Feed";

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

  return <FeedScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
