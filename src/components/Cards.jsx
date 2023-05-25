import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Modal,
  Button,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const Card = ({ title, imageSource }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardShadow}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const CardList = ({ data }) => {
  const [trips, setTrips] = useState(data);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTripTitle, setNewTripTitle] = useState("");

  const handleAddTrip = () => {
    console.log(newTripTitle);
    const newTrip = {
      title: newTripTitle,
      imageSource: require("../../assets/image/tripbg1.png"),
    };

    setTrips([...trips, newTrip]);
    setModalVisible(false);
    setNewTripTitle("");

    console.log("Voyage ajouté");
  };


  // console.log(data)
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={[styles.cardList, styles.cardShadow]}>
        {trips.map((item, index) => (
          <Card key={index} title={item.title} imageSource={item.imageSource} />
        ))}
      </View>
      <View>

      </View>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonLabel}>+</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Ajouter un nouveau voyage</Text>
            <TextInput
              style={styles.input}
              placeholder="Titre du voyage"
              placeholderTextColor={"#132D2F"}
              value={newTripTitle}
              onChangeText={(text) => setNewTripTitle(text)}
            />
            <TouchableOpacity
              title="Ajouter"
              onPress={handleAddTrip}
              style={styles.modalAdd}
            >
              <Text style={styles.modalAddText}>Ajouter</Text>
            </TouchableOpacity>
            <TouchableOpacity
              title="Annuler"
              onPress={() => setModalVisible(false)}
              style={styles.modalCancel}
            >
              <Text style={styles.modalAddText}>Annuler</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardList: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  card: {
    width: 110,
    height: 120,
    borderRadius: 8,
    overflow: "hidden",
    marginLeft: 16,
    borderColor: "#132D2F",
    borderWidth: 2,
    padding: 4,
  },
  cardShadow: {
    modalShadow: "#4D4945",
    shadowOpacity: 0.25,
    shadowOffset: { width: -5, height: 4 },
    shadowRadius: 4,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  title: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 8,
    // backgroundColor: "rgba(0, 0, 0, 0.05)",
    color: "#fff",
    fontSize: 14,
    fontFamily: "Nerko_One",
    textAlign: "center",
  },
  addButton: {
    height: "30%",
    padding: 18,
    top: 40,
   marginLeft: 16,
   marginRight: 16,
    justifyContent: "center",
    backgroundColor: "#FAE5D2",
    borderColor: "#132D2F",
    borderWidth: 2,
    borderRadius: 12,
    borderColor: "#132D2F",
    borderWidth: 2,
    // alignContent: "center",
  },
  addButtonLabel: {
    position: "absolute",
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#EDA47E",
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
    borderRadius: 70,
    paddingHorizontal: 30,
    paddingVertical: 50,
    paddingBottom: 120,
  },
  modalTitle: {
    fontSize: 24,
    fontFamily: "ClashDisplay_bold",
    marginBottom: 20,
    textAlign: "center",
  },
  modalAdd: {
    backgroundColor: "#ffff",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 15,
    // alignSelf: "stretch",
    marginBottom: 40,
  },
  modalCancel: {
    backgroundColor: "#ffff",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 15,
    // alignSelf: "stretch",
  },
  modalAddText: {
    fontSize: 14,
    fontFamily: "Montserrat_medium",
    textAlign: "center",
    color: "#3D3E3E",
  },
  input: {
    // width: "100%",
    height: 40,
    // borderRadius: 10,
    borderBottomWidth: 5,
    borderColor: "#EDA47E",
    borderBottomColor: "#EDA47E",
    marginBottom: 90,
    paddingHorizontal: 10,
  },
});

export default CardList;
