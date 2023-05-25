import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useFonts } from "expo-font";

import Cards from "./Cards";
import SearchBar from "./SearchBar";

const Trips = () => {
  //LOAD FONTS
  const [loadedFont] = useFonts({
    ClashDisplay_bold: require("../../assets/fonts/ClashDisplay-Bold.otf"),
    Montserrat_medium: require("../../assets/fonts/Montserrat-Medium.ttf"),
    Nerko_One: require("../../assets/fonts/NerkoOne-Regular.ttf"),

  });
  if (!loadedFont) {
    return null;
  }
  
  let data = [
    {
      title: "Coutry side",
      imageSource: require("../../assets/image/tripbg1.png"),
    },
    {
      title: "Turquoise",
      imageSource: require("../../assets/image/tripbg2.png"),
    },
    {
      title: "Italia",
      imageSource: require("../../assets/image/tripbg3.png"),
    },
    {
      title: "Paris",
      imageSource: require("../../assets/image/tripbg4.png"),
    },
    {
      title: "Moutain",
      imageSource: require("../../assets/image/tripbg5.png"),
    },
    {
      title: "Plage",
      imageSource: require("../../assets/image/tripbg6.png"),
    },
    {
      title: "Portugal",
      imageSource: require("../../assets/image/tripbg7.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Trips</Text>
      <Cards data={data} /> 
      <SearchBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  title: {
    fontFamily: "ClashDisplay_bold",
    fontSize: 20,
    color: "#132D2F",
    marginBottom: 20,
    marginLeft: 16,
  },
});

export default Trips;
