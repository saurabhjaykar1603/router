import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Button } from "react-native-web";

const index = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          color: "blue",
        }}
      >
        Home
      </Text>
      <Link href={"/about"}>About</Link>
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/contact"}>Contact</Link>
      <Link href={"/feed"} >Feed</Link>
    </View>
  );
};

export default index;
