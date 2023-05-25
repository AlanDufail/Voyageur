import React, { useState } from "react";
import {
  View,
  Button,
  Modal,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
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

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openModal} style={styles.button}>
        <Text style={styles.text}>Paramètre et confidentialité</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Amélioré votre expérience</Text>
            <Image source={sunImage} style={styles.image} />
          </TouchableOpacity>
          <View style={styles.personalMenu}>
            <TouchableOpacity style={styles.personal}>
              <Text>🗺️</Text>
              <Text>Partager mon compte</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.personal}>
              <Text>⚙️</Text>
              <Text>Permissions</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.personal}>
              <Text>⭐️</Text>
              <Text>Noté voyageur</Text>
            </TouchableOpacity>
          </View>
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
          <Button
            title="Fermer"
            onPress={closeModal}
            style={styles.closeButton}
          />
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
  text: {
    padding: 5,
  },
  personalMenu: {
    // flex: 1,
  },
  socialMenu: {
    padding: "8%",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
