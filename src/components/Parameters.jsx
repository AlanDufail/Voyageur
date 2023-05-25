import React, { useState } from "react";
import {
  View,
  Button,
  Modal,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const Parameters = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const sunImage = require("../../assets/image/sunEarth.png");
  const arrow = require("../../assets/image/arrowLeft.png");
  const shapedBackgroundeImage = require("../../assets/image/shapedBG.png");

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openModal} style={styles.button}>
        <Text style={styles.text}>Paramètre et confidentialité</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.enhanceButton}>
            <Text style={styles.enhanceText}>Amélioré votre expérience</Text>
            <Image source={sunImage} style={styles.enhanceImage} />
          </TouchableOpacity>
          <Image source={shapedBackgroundeImage} style={styles.shapedBg} />
          <View style={styles.socialMenu}>
            <TouchableOpacity style={styles.social}>
              <Text>Nous suivre </Text>
              <Image
                source={require("../../assets/image/arrow.png")}
                style={styles.arrow}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.social}>
              <Text>Nous faire un retour</Text>
              <Image
                source={require("../../assets/image/arrow.png")}
                style={styles.arrow}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.social}>
              <Text>Se déconnecter</Text>
              <Image
                source={require("../../assets/image/arrow.png")}
                style={styles.arrow}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={closeModal} style={styles.nextButton}>
            <Text style={styles.btnText}>Fermer</Text>
            <Image source={arrow} style={{ marginLeft: 5 }} />
          </TouchableOpacity>

          {/* <Button
            title="Fermer"
            onPress={closeModal}
            style={styles.closeButton}
          /> */}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
  },
  button: {
    position: "absolute",
    top: 100,
    left: 100,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
  },
  enhanceButton: {
    position: "absolute",
    top: 200,
    left: 40,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    flexDirection: "row",
    width: 250,
    // justifyContent: "space-between",
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
  btnText: {
    alignSelf: "center",
    fontFamily: "ClashDisplay_bold",
    fontSize: 15,
  },
  text: {
    padding: 5,
    fontFamily: "Nerko_One",
    corlor: "#EDA47E",
  },
  enhanceText: {
    paddingVertical: 2,
    paddingRight: 16,
    fontFamily: "Nerko_One",
    fontSize: 16,
    color: "#EDA47E",
  },
  personalMenu: {
    // flex: 1,
  },
  shapedBg: {
    position: "absolute",
    flex: 1,
    top: 300,
    paddingTop: 300,
    marginBottom: 250, //ICI
  },
  socialMenu: {
    marginTop: 100,
    padding: "8%",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#132D2F",
  },
  closeButton: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
  },
  image: {
    position: "absolute",
    top: -20,
    left: 60,
    width: 60,
    height: 50,
  },
  enhanceImage: {
    position: "absolute",
    top: -45,
    right: -90,
    width: 150,
    height: 150,
  },
  arrow: {
    width: "50%",
    height: "70%",
    transform: [{ rotate: "90deg" }],
    resizeMode: "contain",
  },
  social: {
    justifyContent: "space-between",
    flexDirection: "row",
    padding: "5%",
  },
  personal: {
    padding: "5%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default Parameters;
