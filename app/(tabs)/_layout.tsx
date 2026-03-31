import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#171212",
        // headerStyle: {
        //   backgroundColor: "#25292e",
        // },

        // tabBarStyle: {
        //   backgroundColor: "#25292e",
        // },
      }}
    >
      <Tabs.Screen
        name="trending"
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <Feather name="trending-up" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="heart-outlined" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: "",
          tabBarIcon: ({ size }) => (
            <View style={styles.homeButton}>
              <Feather
                name="home"
                size={size}
                color="white"
                style={{ zIndex: 1 }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-cart" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "",
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  homeButton: {
    backgroundColor: "#42B1EF",
    borderRadius: 50,
    // padding: 20,
    width: 56, // replaces padding
    height: 56,
    marginTop: -28,
    //   shadowColor: "#0ea5e9",
    //   shadowOpacity: 0.45,
    //   shadowRadius: 10,
    //   shadowOffset: { width: 0, height: 4 },
    //   elevation: 8,
    //   overflow: "visible",
    alignItems: "center",
    justifyContent: "center",
    //   zIndex: -1,
  },
});
