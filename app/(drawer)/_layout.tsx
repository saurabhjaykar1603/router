import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { router, usePathname } from "expo-router";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Layout() {
  const CustomDrawerContent = (props: any) => {
    const pathname = usePathname();
    console.log(pathname);

    return (
      <DrawerContentScrollView>
        <View style={styles.userInfoWrapper}>
          <Image
            source={{
              uri: "https://avatars.githubusercontent.com/u/124028591?s=400&u=aa537362cb3bb36fc108e809fd0227c5ed90108d&v=4",
            }}
            width={60}
            height={60}
            style={styles.userImg}
          />
          <View style={styles.userDetailsWrapper}>
            <Text style={styles.userName}>Saurabh Jaykar</Text>
            <Text style={styles.userEmail}>jaykar@email.com</Text>
          </View>
        </View>
        <DrawerItem
          icon={({ color, size }) => (
            <AntDesign
              name="home"
              size={size}
              color={pathname === "/feed" ? "#fff" : "#000"}
            />
          )}
          label={"Feed"}
          onPress={() => router.push("/feed")}
          labelStyle={[
            styles.navItemLabel,
            {
              color: pathname === "/feed" ? "#fff" : "#000",
            },
          ]}
          style={{
            backgroundColor: pathname === "/feed" ? "#333" : "#fff",
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialCommunityIcons
              name="account"
              color={pathname === "/profile" ? "#fff" : "#000"}
              size={size}
            />
          )}
          label={"Profile"}
          onPress={() => router.push("/profile")}
          labelStyle={[
            styles.navItemLabel,
            {
              color: pathname === "/profile" ? "#fff" : "#000",
            },
          ]}
          style={{
            backgroundColor: pathname === "/profile" ? "#333" : "#fff",
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialIcons
              name="favorite"
              size={size}
              color={pathname === "/favorite" ? "#fff" : "#000"}
            />
          )}
          label={"Favorite"}
          onPress={() => router.push("/favorite")}
          labelStyle={[
            styles.navItemLabel,
            {
              color: pathname === "/favorite" ? "#fff" : "#000",
            },
          ]}
          style={{
            backgroundColor: pathname === "/favorite" ? "#333" : "#fff",
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <AntDesign
              name="setting"
              size={size}
              color={pathname === "/settings" ? "#fff" : "#000"}
            />
          )}
          label={"Settings"}
          onPress={() => router.push("/settings")}
          labelStyle={[
            styles.navItemLabel,
            {
              color: pathname === "/settings" ? "#fff" : "#000",
            },
          ]}
          style={{
            backgroundColor: pathname === "/settings" ? "#333" : "#fff",
          }}
        />
      </DrawerContentScrollView>
    );
  };

  const styles = StyleSheet.create({
    navItemLabel: {
      marginLeft: -20,
      fontSize: 16,
    },
    userInfoWrapper: {
      flexDirection: "row",
      paddingHorizontal: 10,
      paddingVertical: 20,
      borderBottomColor: "red",
      borderBottomWidth: 1,
      marginBottom: 10,
      backgroundColor: "orange",
    },
    userImg: {
      borderRadius: 40,
    },
    userDetailsWrapper: {
      marginTop: 10,
      marginLeft: 10,
    },
    userName: {
      fontSize: 16,
      fontWeight: "bold",
    },
    userEmail: {
      fontSize: 16,
      fontStyle: "italic",
      textDecorationLine: "underline",
    },
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen
          name="favorite"
          options={{
            headerShown: true,
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            headerShown: true,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
