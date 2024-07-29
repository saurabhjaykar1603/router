import { router, Stack } from "expo-router";
import React from "react";
import { Button } from "react-native";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTitleStyle: {
          color: "#fff",
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home",
          headerRight: () => (
            <Button onPress={() => router.push("/contact")} title="Contact" />
          ),
        }}
      />
      <Stack.Screen
        name="about"
        options={{
          headerTitle: "About",
        }}
      />
      <Stack.Screen
        name="blog/index"
        options={{
          headerTitle: "Blog",
        }}
      />

      <Stack.Screen
        name="contact"
        options={{
          headerTitle: "Contact",
          presentation: "card",
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerTitle: "Tab",
          headerShown:false
        }}
      />
    </Stack>
  );
};

export default RootLayout;
