import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  ImageBackground,
  Image,
} from "react-native";
import { useFonts } from "expo-font";
import * as Location from "expo-location";

import Map from "./Map";

const StartingModal = () => {
  const [journeyModal, setJourneyModal] = useState(true);
  const [locationModal, setLocationModal] = useState(false);
  const [markModal, setMarkModal] = useState(false);

  const backgroundImage = require("../../assets/image/BG.png");

  //LOAD FONTS
  const [loadedFont] = useFonts({
    ClashDisplay_bold: require("../../assets/fonts/ClashDisplay-Bold.otf"),
    Montserrat_medium: require("../../assets/fonts/Montserrat-Medium.ttf"),
    Nerko_One: require("../../assets/fonts/NerkoOne-Regular.ttf"),
  });
  if (!loadedFont) {
    return null;
  }

  // CLOSE AND GO TO NEXT MODAL
  const handleCloseModal = async () => {
    setJourneyModal(false);
    setLocationModal(true);

    if (locationModal) {
      // const { status } = await Location.requestForegroundPermissionsAsync();

      // if (status !== "granted") {
      //   // Si l'autorisation n'est pas donnée, redemande l'autorisation ici
      //   const secondRequest =
      //     await Location.requestForegroundPermissionsAsync();

      //   if (secondRequest.status !== "granted") {
      //     // Si l'autorisation n'est toujours pas accordée, affiche un message à l'utilisateur
      //     console.log(
      //       "L'application ne peut pas fonctionner correctement sans l'autorisation d'accéder à la localisation."
      //     );
      //     return;
      //   }
      // }
      setLocationModal(false);
      setMarkModal(true);
      if (markModal) {
        setMarkModal(false);
      }
    }
  };

  // useEffect(() => {
  //   const startLocationUpdates = async () => {
  //     if (markModal) {
  //       const locationTaskName = "MY_LOCATION_TASK"; // Remplace avec le nom de la tâche de localisation souhaitée

  //       await Location.startLocationUpdatesAsync(locationTaskName, {
  //         accuracy: Location.Accuracy.BestForNavigation,
  //         timeInterval: 5000,
  //         distanceInterval: 10,
  //       });
  //     }
  //   };

  //   startLocationUpdates();

  //   return () => {
  //     // Arrête la récupération de la localisation lorsque le composant est démonté
  //     Location.stopLocationUpdatesAsync("MY_LOCATION_TASK");
  //   };
  // }, [markModal]);

  return (
    <View>
      <Modal visible={journeyModal} animationType="slide" transparent={true}>
        <ImageBackground style={styles.modalContainer} source={backgroundImage}>
          <Text style={styles.title}>À vos billets !</Text>
          <Text style={styles.paraph}>
            Nous pouvons utiliser les données de localisation de votre photo
            pour marquer les pays que vous avez déjà visités !
          </Text>
          <TouchableOpacity
            onPress={handleCloseModal}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>Suivant</Text>
          </TouchableOpacity>
        </ImageBackground>
      </Modal>
      <Modal visible={locationModal} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>
            Noooon vous n'avez pas marqué de pays!
          </Text>
          <Text style={styles.paraph}>
            Il est temps de prendre part à votre voyage !
          </Text>
          <Text style={styles.flag}>🇮🇹 🇨🇦 🇫🇷 🇧🇷 🇵🇹</Text>
          <TouchableOpacity
            onPress={handleCloseModal}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>Suivant</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal visible={markModal} animationType="slide" transparent={true}>
        <View style={styles.modalLocalisation}>
          <Image source={require("../../assets/image/sunEarth.png")} />
          <Text style={styles.title}>
            Marquez automatiquement les lieux où vous avez été !
          </Text>
          <Text style={styles.paraph}>
            Activer l'accès à la localisation pour localiser automatiquement vos
            photos pour la création des souvenirs !
          </Text>
          <TouchableOpacity
            onPress={handleCloseModal}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>Continuer</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "flex-end",
    // justifyContent: "flex-end",
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#FFF5EB",
    // backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  modalLocalisation: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#FFF5EB",
    // backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: "ClashDisplay_bold",
    marginBottom: 20,
    textAlign: "center",
  },
  paraph: {
    fontFamily: "Montserrat_medium",
    fontSize: 14,
    color: "#3D3E3E",
    opacity: 0.5,
    marginBottom: 20,
    textAlign: "center",
  },
  flag: {
    fontSize: 40,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#ffff",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 15,
    // alignSelf: "stretch",
  },
  closeButtonText: {
    fontSize: 14,
    fontFamily: "Montserrat_medium",
    textAlign: "center",
    color: "#3D3E3E",
  },
});

export default StartingModal;
