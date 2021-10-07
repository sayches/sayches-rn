import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import MainHeader from "../../components/Headers/MainHeader";
import Container from "../../components/Posts/Container";
import { FetchFeed } from "../../helpers/API/FetchFeed";
import Colors from "../../styles/Colors";
import { useSelector, useDispatch } from "react-redux";

function FeedScreen({ navigation }) {
  const postReducer = useSelector((state) => state);

  const [postData, setPostData] = useState([
    { user: { profile: { photo_url: "" } } },
  ]);

  const [refreshing, setRefreshing] = useState(false);
  const handleRefresh = () => {
    setRefreshing(true);
  };

  useEffect(() => {
    FetchFeed(setPostData);
  }, []);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = () => {
    FetchFeed(setPostData);
  };

  const flatListRef = useRef();
  const toTop = () => {
    flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
  };

  return (
    <>
      <MainHeader onPress={toTop} />
      <View style={styles.screen}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={postData}
          ref={flatListRef}
          keyExtractor={(post) => post.id}
          refreshing={refreshing}
          onRefresh={(handleRefresh, loadPosts)}
          onEndReached={loadPosts}
          onEndReachedThreshold={0.9}
          decelerationRate={0.5}
          renderItem={({ item }) => (
            <Container
              profilePhoto={{ uri: item.user.profile.photo_url }}
              name={item.user.name}
              userHash={item.user.user_hash}
              userID={item.user.id}
              flairBackground={
                item.flair !== "No Flair" ? Colors.primaryColour : null
              }
              flairText={item.flair !== "No Flair" ? item.flair : null}
              flairColor={Colors.secondaryColor}
              postText={item.text}
              mediaHeight={item.image !== null ? 300 : 0}
              mediaWidth={item.image !== null ? 300 : 0}
              mediaSource={{ uri: item.image }}
              totalViewes="0"
              profileNavigation={navigation}
            />
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FeedScreen;
