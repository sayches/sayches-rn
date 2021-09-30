import React from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "./Colors";
import Fonts from "./Fonts";

function AppTexts({
  text,
  color = Colors.primaryColour,
  fontWeight,
  maxWidth,
  margin,
  marginLeft,
  fontSize = 13,
  fontFamily = Fonts.poppinsRegular,
}) {
  return (
    <Text
      style={{
        color: color,
        fontWeight: fontWeight,
        maxWidth: maxWidth,
        margin: margin,
        marginLeft: marginLeft,
        fontSize: fontSize,
        fontFamily: fontFamily,
      }}
    >
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  appTexts: {
    fontSize: 13,
  },
});

export default AppTexts;
