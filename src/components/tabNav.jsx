import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../view/home";
import Passport from "../view/passport";
import Explore from "../view/explore";

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? require("../../assets/map.png")
              : require("../../assets/map.png");
          } else if (route.name === "Passport") {
            iconName = focused
              ? require("../../assets/passport.png")
              : require("../../assets/passport.png");
          } else if (route.name === "Explore") {
            iconName = focused
              ? require("../../assets/explore.png")
              : require("../../assets/explore.png");
          }

          // You can return any component that you like here!
          return <Image source={iconName} style={{ width: 25, height: 25 }} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: styles.tabNab,
      })}
    >
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Passport" component={Passport} />
    </Tab.Navigator>
  );
};

export default TabNav;

const styles = StyleSheet.create({
  tabNab: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,
    height: 100,
    backgroundColor: "#FFFAF5",
    borderRadius: 45,
  },
  container: {
    padding: 10,
    backgroundColor: "red",
  },
});
