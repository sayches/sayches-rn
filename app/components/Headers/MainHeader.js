import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Colors from "../../styles/Colors";

function MainHeader(props) {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity onPress={props.onPress}>
          <Image
            style={styles.logo}
            source={require("../../assets/images/logos/sayches.png")}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    backgroundColor: Colors.secondaryColor,
    height: 70,
    width: "100%",
    justifyContent: "center",
  },
  logo: {
    height: 50,
    width: 50,
  },
});
export default MainHeader;