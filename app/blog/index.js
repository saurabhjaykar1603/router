import { View, Text, Button } from "react-native";
import React from "react";
import { Link, router } from "expo-router";

const Blog = () => {
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
        Blog
      </Text>
      <Button title="blog1" onPress={() => router.push("/blog/1")} />
      <Button title="blog2" onPress={() => router.push("/blog/2")} />
      <Button
        title="blog3"
        onPress={() => router.push("/blog/3?author=Saurabh")}
      />
      <Link
        href={{
          pathname: "/blog/4",
          params: { author: "Yogita" },
        }}
      >
        <Text
          style={{
            color: "blue",
            fontSize: 20,
          }}
        >
          Blog 4 with Link
        </Text>
      </Link>
      <Link href={"/"}> Go to Home</Link>
    </View>
  );
};

export default Blog;
