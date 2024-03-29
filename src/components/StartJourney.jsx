import React, { useState, useRef } from "react";
import {
  View,
  Button,
  Modal,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import SearchBar from "./SearchBar";
import JourneyCard from "./JourneyCard";
import CountryInfoSlider from "./CountryInfoSlider";
import Cards from "./Cards";
import CardsDeals from "./CardsDeals";

const img = require("../../assets/image/duck.png");
const arrow = require("../../assets/image/arrowLeft.png");
const countryImage = require("../../assets/image/country.png");

const dataDeals = [
  {
    pays: "France",
    imageSource: require("../../assets/image/deal1.png"),
  },
  {
    pays: "États-Unis",
    imageSource: require("../../assets/image/deal2.png"),
  },
  {
    pays: "Canada",
    imageSource: require("../../assets/image/deal3.png"),
  },
];
const data = [
  {
    id: "fr",
    drapeau: "🇫🇷",
    pays: "France",
  },
  {
    id: "usa",
    drapeau: "🇺🇸",
    pays: "États-Unis",
  },
  {
    id: "ca",
    drapeau: "🇨🇦",
    pays: "Canada",
  },
  {
    id: "de",
    drapeau: "🇩🇪",
    pays: "Allemagne",
  },
  {
    id: "uk",
    drapeau: "🇬🇧",
    pays: "Royaume-Uni",
  },
  {
    id: "jp",
    drapeau: "🇯🇵",
    pays: "Japon",
  },
];

const transportData = [
  {
    icone: "🚗",
    transport: "Voiture",
  },
  {
    icone: "🚲",
    transport: "Vélo",
  },
  {
    icone: "🚌",
    transport: "Bus",
  },
  {
    icone: "🚆",
    transport: "Train",
  },
  {
    icone: "✈️",
    transport: "Avion",
  },
  {
    icone: "🛴",
    transport: "Trottinette",
  },
  // Ajoutez ici d'autres moyens de transport selon vos besoins
];

const backgroundImage = require("../../assets/image/BG.png");
const shapedBackgroundeImage = require("../../assets/image/shapedBG.png");

let searchResuts = {};

const StartJourney = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentModalIndex, setCurrentModalIndex] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  let [searchTextState, setSearchText] = useState("");

  const scrollViewRef = useRef(null);


  // GET RECHERCHE
  const handleSearch = (searchText) => {
    searchResuts = searchText;
    console.log(searchResuts[0].name);
    setSearchText(searchResuts);
    return searchResuts;
  };

  const openModal = () => {
    const nextModalIndex = currentModalIndex + 1;
    setCurrentModalIndex(nextModalIndex);
    setModalVisible(true);
    scrollViewRef.current?.scrollTo({ y: scrollPosition, animated: false });
  };

  const backModal = () => {
    const backModalIndex = currentModalIndex - 1;
    setCurrentModalIndex(backModalIndex);
  };

  const closeModal = () => {
    setCurrentModalIndex(0);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.bg}
      >
        <TouchableOpacity onPress={openModal} style={styles.button}>
          <Image source={img} style={styles.image} />
          <Text style={styles.text}>Commencer votre voyage</Text>
        </TouchableOpacity>
      </ImageBackground>

      <Modal visible={modalVisible} onRequestClose={closeModal}>
        <View style={styles.bg}>
          {currentModalIndex === 1 && (
            <ImageBackground
              source={
                currentModalIndex === 1
                  ? backgroundImage
                  : shapedBackgroundeImage
              }
              resizeMode="cover"
              style={currentModalIndex === 1 ? styles.bg : styles.bg}
            >
              <ScrollView style={styles.scrollView}>
                <View style={styles.modalContainer}>
                  <View style={styles.journeyStep}>
                    <SearchBar onSearch={handleSearch} />
                    <View style={styles.body}>
                      <Text style={styles.title}>Pays</Text>
                      <JourneyCard data={data} />
                      <Text style={styles.title}>Moyen de transport</Text>
                      <JourneyCard data={transportData} />
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={
                      currentModalIndex >= 1 && currentModalIndex <= 2
                        ? openModal
                        : closeModal
                    }
                    style={styles.nextButton}
                  >
                    <Text style={styles.btnText}>
                      {currentModalIndex >= 1 && currentModalIndex <= 2
                        ? "Suivant"
                        : "Fermer"}
                    </Text>
                    <Image source={arrow} style={{ marginLeft: 5 }} />
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </ImageBackground>
          )}
          {currentModalIndex === 2 && (
            <View style={{ flex: 1 }}>
              <Image source={countryImage} style={styles.countryBg} />
              <Text style={styles.countryTitle}>{searchTextState[0].name}</Text>
              <ScrollView style={styles.scrollView}>
                <Image
                  source={shapedBackgroundeImage}
                  style={styles.shapedBg}
                />
                <View style={styles.countryContainer}>
                  <View style={styles.journeyStep}>
                    <ScrollView
                      ref={scrollViewRef}
                      onLayout={() => scrollViewRef.current.scrollToEnd()}
                      onScroll={({ nativeEvent }) => {
                        scrollViewRef.current.scrollTo({
                          y: nativeEvent.layoutMeasurement.height,
                          x: 0,
                          animated: false,
                        });
                      }}
                      scrollEventThrottle={400}
                    >
                      <CountryInfoSlider search={searchTextState} />
                    </ScrollView>
                  </View>
                  <TouchableOpacity
                    onPress={
                      currentModalIndex >= 1 && currentModalIndex <= 2
                        ? openModal
                        : closeModal
                    }
                    style={styles.nextButton}
                  >
                    <Text style={styles.btnText}>
                      {currentModalIndex >= 1 && currentModalIndex <= 2
                        ? "Suivant"
                        : "Fermer"}
                    </Text>
                    <Image source={arrow} style={{ marginLeft: 5 }} />
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          )}
          {currentModalIndex === 3 && (
            <View style={styles.bgDeals}>
              <ScrollView style={styles.scrollView}>
                <View style={styles.modalContainer}>
                  <View style={styles.journeyStep2}>
                    <View style={styles.topDeal}>
                      <Text style={styles.title2}>
                        Top deal de dernière minute !
                      </Text>
                      <CardsDeals data={dataDeals} />
                    </View>
                    <ScrollView>
                      <Text>Top activities</Text>
                      {/* <Image
                        source={shapedBackgroundeImage}
                        style={styles.shapedBgDeals}
                      /> */}
                    </ScrollView>
                  </View>

                  <TouchableOpacity
                    onPress={
                      currentModalIndex >= 1 && currentModalIndex <= 2
                        ? openModal
                        : closeModal
                    }
                    style={styles.nextButton}
                  >
                    <Text style={styles.btnText}>
                      {currentModalIndex >= 1 && currentModalIndex <= 2
                        ? "Suivant"
                        : "Fermer"}
                    </Text>
                    <Image source={arrow} style={{ marginLeft: 5 }} />
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          )}

          {/* Return button */}
          <TouchableOpacity
            onPress={currentModalIndex === 1 ? closeModal : backModal}
            style={[styles.closeButton, styles.buttonShadow]}
          >
            <Image source={arrow} style={styles.buttonArrow} />
            <Text style={styles.btnText}>
              {currentModalIndex === 1 ? "FERMER" : "RETOUR"}
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default StartJourney;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  modalbg: {
    flex: 1,
    // backgroundColor: "red",
  },
  bg: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 20,
  },
  bgDeals: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#132D2F",
    borderRadius: 20,
  },
  shapedBg: {
    flex: 1,
    top: 300,
    paddingTop: 300,
    marginBottom: 250, //ICI
  },
  shapedBgDeals: {
    flex: 1,
    top: 300,
    paddingTop: 300,
    marginBottom: 250, //ICI
  },
  countryBg: {
    position: "absolute",
  },
  countryTitle: {
    position: "absolute",
    top: 270,
    left: 16,
    fontSize: 24,
    fontFamily: "ClashDisplay_bold",
    color: "white",
  },
  container: {
    flex: 1,
    position: "absolute",
    bottom: 120,
    right: 24,
  },
  body: {
    flex: 1,
    width: "90%",
  },
  journeyStep: {
    paddingTop: 60,
  },
  journeyStep2: {
    paddingTop: 30,
  },
  topDeal: {
    marginTop: 20,
  },
  button: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 99,
  },
  text: {
    fontFamily: "ClashDisplay_bold",
    padding: 5,
  },
  modalContainer: {
    flex: 1,
    top: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  countryContainer: {
    position: "absolute",
    flex: 1,
    top: 320,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 80,
    left: 20,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    borderColor: "#132D2F",
    borderWidth: 2,
  },
  nextButton: {
    maxWidth: 110,
    flexDirection: "row",
    // marginTop: 20,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    borderColor: "#132D2F",
    borderWidth: 2,
  },
  buttonShadow: {
    modalShadow: "#4D4945",
    shadowOpacity: 0.25,
    shadowOffset: { width: -5, height: 4 },
    shadowRadius: 4,
  },
  btnText: {
    alignSelf: "center",
    fontFamily: "ClashDisplay_bold",
    fontSize: 15,
  },
  buttonArrow: {
    marginRight: 5,
    transform: [{ rotate: "180deg" }],
  },
  image: {
    position: "absolute",
    top: -30,
    left: 60,
    width: 60,
    height: 50,
  },
  pays: {
    flex: 1,
  },
  title: {
    paddingTop: 20,
    fontFamily: "ClashDisplay_bold",
    fontSize: 20,
    color: "#132D2F",
    marginBottom: 20,
  },
  title2: {
    paddingTop: 40,
    fontFamily: "ClashDisplay_bold",
    fontSize: 22,
    color: "white",
    marginLeft: 20,
    marginBottom: 10,
    textAlign: "left",
  },
});
