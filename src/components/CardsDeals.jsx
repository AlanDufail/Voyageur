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
  // console.log(title);
  return (
    <View style={styles.card}>
      <View style={styles.cardShadow}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <View style={styles.selectionCategory}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const CardsDeals = ({ data }) => {
  const [trips, setTrips] = useState(data);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTripTitle, setNewTripTitle] = useState("");

  const handleAddTrip = () => {
    // console.log(newTripTitle);
    const newTrip = {
      title: newTripTitle,
      imageSource: require("../../assets/image/tripbg1.png"),
    };

    setTrips([...trips, newTrip]);
    setModalVisible(false);
    setNewTripTitle("");

    console.log("Voyage ajouté");
  };

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={[styles.cardList, styles.cardShadow]}>
        {trips.map((item, index) => (
          <Card key={index} title={item.pays} imageSource={item.imageSource} />
        ))}
      </View>
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
    width: 120,
    height: 110,
    borderRadius: 8,
    overflow: "hidden",
    marginLeft: 16,
    borderColor: "white",
    borderWidth: 2,
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
    // position: "absolute",
    // bottom: 0,
    // left: 0,
    // right: 0,
    // padding: 8,
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "#132D2F",
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
  selectionCategory: {
    position: "absolute",
    width: "70%",
    bottom: 8,
    backgroundColor: "#ffff",
    alignSelf: "center",
    paddingHorizontal: "10%",
    borderRadius: 14,
    borderColor: "#132D2F",
    borderWidth: 2,
  },
});

export default CardsDeals;
