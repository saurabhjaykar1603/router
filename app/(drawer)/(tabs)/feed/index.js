import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const feed = () => {
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
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        Feed
      </Text>
      <Link href={"/"}> Go to Home</Link>
    </View>
  );
};

export default feed;
