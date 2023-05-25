import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../view/home";
import Passport from "../view/passport";
import Explore from "../view/explore";
import StartingModal from "./StartingModal";

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <NavigationContainer>
      <StartingModal />
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
            return (
              <Image source={iconName} style={{ width: 25, height: 25 }} />
            );
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: styles.tabNab,
          headerStyle: {
            backgroundColor:
              route.name === "Explore"
                ? "#FFFAF5"
                : route.name === "Home"
                ? "#FFFAF5"
                : "#132D2F",
            borderBottomWidth: 4,
            borderBottomColor:
              route.name === "Explore"
                ? "#132D2F"
                : route.name === "Home"
                ? "#132D2F"
                : "#132D2F",
          },
          headerTintColor:
            route.name === "Explore"
              ? "#132D2F"
              : route.name === "Home"
              ? "#132D2F"
              : "#FFFAF5",
          headerBackgroundContainerStyle: {
            backgroundColor: "#FFFAF5",
          },
        })}
      >
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Passport" component={Passport} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNav;

const styles = StyleSheet.create({
  tabNab: {
    position: "absolute",
    // bottom: 10,
    left: 10,
    right: 10,
    height: 100,
    backgroundColor: "#FFFAF5",
    borderRadius: 30,
  },
  container: {
    padding: 10,
    backgroundColor: "red",
  },
  screen: {
    height: 100,
  },
});
