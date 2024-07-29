import { View, Text } from "react-native";
import React from "react";
import { Link, Stack, useLocalSearchParams } from "expo-router";

const Id = () => {
  const { id, author } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: `Article ${id}`,
        }}
      />
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
          ID {id} author is {author}
        </Text>
        <Link href={"/"}> Go to Home</Link>
      </View>
    </>
  );
};

export default Id;
