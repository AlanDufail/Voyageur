import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";

import Trips from "../components/Trips";
import SearchBar from "../components/SearchBar";
import SocialCard from "../components/SocialCard";
import SelectionExplore from "../components/SelectionExplore";

const backgroundImage = require("../../assets/image/BG.png");

const images = {
  guide1: require("../../assets/image/guide1.png"),
};

const socialData = [
  {
    title: "Country Side",
    imageSource: require("../../assets/image/socialTrip1.png"),
    description: "Ceci est la description numero 1",
  },
  {
    title: "Carte 2",
    imageSource: require("../../assets/image/socialTrip1.png"),
    description: "Ceci est la description numero 2",
  },
  {
    title: "Carte 3",
    imageSource: require("../../assets/image/socialTrip1.png"),
    description: "Ceci est la description numero 3",
  },
  // {
  //   title: "Carte 4",
  //   imageSource: require("../../assets/image/tripbg4.png"),
  //   description: "Ceci est la description numero 4",
  // },
  // {
  //   title: "Carte 5",
  //   imageSource: require("../../assets/image/tripbg5.png"),
  //   description: "Ceci est la description numero 5",
  // },
  // {
  //   title: "Carte 6",
  //   imageSource: require("../../assets/image/tripbg6.png"),
  //   description: "Ceci est la description numero 6",
  // },
  // {
  //   title: "Carte 7",
  //   imageSource: require("../../assets/image/tripbg7.png"),
  //   description: "Ceci est la description numero 7",
  // },
];

const guideData = [
  {
    title: "Guide 1",
    image: require("../../assets/image/guide1.png"),
    description: "Picturesque Spots in Spain",
  },
  {
    title: "Guide 2",
    image: require("../../assets/image/guide1.png"),
    description: "Picturesque Spots in Spain",
  },
  {
    title: "Guide 2",
    image: require("../../assets/image/guide1.png"),
    description: "Picturesque Spots in Spain",
  },
  // {
  //   title: "Guide 2",
  //   image: require("../../assets/image/guide1.png"),
  //   description: "Picturesque Spots in Spain",
  // },
];

const popularTripData = [
  {
    title: "Popular trip 1",
    image: require("../../assets/image/guide1.png"),
    description: "Picturesque Spots in Spain",
  },
  {
    title: "Popular trip 2",
    image: require("../../assets/image/guide1.png"),
    description: "Picturesque Spots in Spain",
  },
  {
    title: "Popular trip 2",
    image: require("../../assets/image/guide1.png"),
    description: "Picturesque Spots in Spain",
  },
];

const users = [
  {
    username: "Pape San",
    picture: require("../../assets/image/user1.png"),
  },
];

const Explore = () => {
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
    <ImageBackground
      source={backgroundImage}
      resizeMode="cover"
      style={styles.image}
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Trips />
          <SocialCard data={socialData} users={users} />
          <SelectionExplore
            selectionTitle={"Explore nos guides"}
            data={guideData}
          />
          <View style={styles.guide}>
            <SelectionExplore
              selectionTitle={"Voyage populaire 🔥"}
              data={popularTripData}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // position: "absolute",
    top: 40,
    // flexDirection: "column",
    // justifyContent: "space-between",
  },
  image: {
    flex: 1,
    // justifyContent: "center",
    // backgroundColor: "#FFFAF5",
    // backgroundColor: "red",
  },
  scrollView: {
    flex: 1,
  },
  guide: {
    marginBottom: 150,
  },
});
