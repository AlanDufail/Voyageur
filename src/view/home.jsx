import React from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import { useFonts } from "expo-font";

import Map from "../components/Map";
import StartJourney from "../components/StartJourney";

const backgroundImage = require("../../assets/image/map.png");

const Home = () => {
  //LOAD FONTS
  const [loadedFont] = useFonts({
    ClashDisplay_bold: require("../../assets/fonts/ClashDisplay-Bold.otf"),
    ClashDisplay_regular: require("../../assets/fonts/ClashDisplay-Regular.otf"),
    Montserrat_medium: require("../../assets/fonts/Montserrat-Medium.ttf"),
    Nerko_One: require("../../assets/fonts/NerkoOne-Regular.ttf"),
  });
  if (!loadedFont) {
    return null;
  }

  return (
    <View style={styles.container}>
        <Map />
        <StartJourney />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFFAF5",
  },
});
