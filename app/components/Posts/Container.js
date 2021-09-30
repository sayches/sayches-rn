import React from "react";
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import Colors from "../../styles/Colors";
import AppTexts from "../../styles/AppTexts";
import Fonts from "../../styles/Fonts";
import { PostSerializer } from "../../helpers/API/FetchFeed";

export default function Container(props) {
  const [bgColor, setBgColor] = React.useState(Colors.secondaryPurple);
  var styledContainer = { ...styles.container, backgroundColor: bgColor };

  return (
    <TouchableOpacity
      style={styledContainer}
      activeOpacity={1.0}
      onPress={() => setBgColor(Colors.secondaryColor)}
    >
      {/* ---- Container Header ---- */}

      <View>
        <View style={styles.containerHeader}>
          <Image style={styles.photo} source={props.profilePhoto} />

          {/* Name and Username */}
          <View style={styles.nameAndUsername}>
            <AppTexts fontFamily={Fonts.poppinsBold} text={props.name} />
            <AppTexts text={props.userHash} />
          </View>

          {/* Total Viewes */}
          <Image
            style={styles.eyeIcon}
            source={require("../../assets/images/icons/eye_240x240.png")}
          />
          <AppTexts fontSize={11} minWidth={3} text={props.totalViewes} />
        </View>
      </View>

      {/* Flair */}
      <View style={[styles.flair, { backgroundColor: props.flairBackground }]}>
        <AppTexts
          fontSize={12}
          text={props.flairText}
          color={props.flairColor}
        ></AppTexts>
      </View>

      {/* ---- Container Body ---- */}

      {/* Post Text */}
      <AppTexts
        marginLeft={20}
        margin={10}
        maxWidth={400}
        text={props.postText}
      ></AppTexts>

      {/* Attached Media */}
      <Image
        style={[
          styles.media,
          { height: props.mediaHeight, width: props.mediaWidth },
        ]}
        source={props.mediaSource}
      />

      {/* ---- Container Footer ---- */}

      <View style={styles.footer}>
        {/* Reactions */}
        <View style={styles.reactions}>
          <Image
            style={styles.reactionIcon}
            source={require("../../assets/images/icons/reaction_240x240.png")}
          />
          <AppTexts text=" 0" />
          <AppTexts text=" Reactions" />
        </View>

        {/* Comments */}
        <View style={styles.comments}>
          <Image
            style={styles.commentIcon}
            source={require("../../assets/images/icons/comment_240x240.png")}
          />
          <AppTexts text=" 0 " />
          <AppTexts text="Comments" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    borderRadius: 10,
    marginVertical: 5,
    paddingBottom: 20,
  },
  containerHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  nameAndUsername: {
    marginTop: 20,
    minWidth: 153,
  },
  footer: {
    flexDirection: "row",
  },
  flair: {
    height: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    marginLeft: 20,
    marginBottom: 0,
  },
  comments: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 20,
  },
  commentIcon: {
    height: 15,
    width: 15,
  },
  photo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  reactions: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 20,
  },
  reactionIcon: {
    height: 15,
    width: 15,
  },
  media: {
    width: 300,
    height: 300,
    borderRadius: 10,
    margin: 10,
    alignSelf: "center",
  },
  eyeIcon: {
    height: 12,
    width: 12,
    marginLeft: 55,
    marginRight: 3,
  },
});
