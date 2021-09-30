import React from "react";
import { TouchableOpacity } from "react-native";
import Colors from "../../styles/Colors";

export default function MarkOnClick({ children }) {
  const [bgColor, setBgColor] = React.useState(Colors.secondaryPurple);
  var styledContainer = { backgroundColor: bgColor };

  return (
    <TouchableOpacity
      style={styledContainer}
      activeOpacity={1.0}
      onPress={() => setBgColor(Colors.secondaryColor)}
    >
      {children}
    </TouchableOpacity>
  );
}
