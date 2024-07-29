import { View, Text, Button } from "react-native";
import React from "react";
import { router, Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DrawerToggleButton } from "@react-navigation/drawer";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerLeft: () => <DrawerToggleButton />,
      }}
    >
      <Tabs.Screen
        name="feed"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
          tabBarLabel: "Feed",
          headerTitle: "Feed",
          headerRight: () => (
            <Button title="Add Post" onPress={() => router.push("feed/new")} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={24} />
          ),
          tabBarLabel: "Profile",
          headerTitle: "Profile",
        }}
      />
      
    </Tabs>
  );
};

export default TabLayout;
