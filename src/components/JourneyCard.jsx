import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

import BouncyCheckbox from "react-native-bouncy-checkbox";

const drinkImage = require("../../assets/image/drink.png");

const Card = ({ id, img, title }) => {
  const [isSelected, setSelection] = useState(false);

  const handleCheckboxToggle = () => {
    setSelection(!isSelected);
    console.log("Checkbox is " + id)
  };

  return (
    <View style={styles.card}>
      <BouncyCheckbox
        size={20}
        fillColor="#EDA47E"
        unfillColor="#FFFFFF"
        style={styles.checkbox}
        iconStyle={{ borderColor: "red" }}
        innerIconStyle={{ borderWidth: 2 }}
        isChecked={isSelected}
        onPress={handleCheckboxToggle}
        id={id}
      />
      <View style={styles.body}>
        <Text style={styles.countryFlag}>{img}</Text>
        <Text style={styles.countryTitle}>{title}</Text>
      </View>
    </View>
  );
};

const JourneyCard = ({ data }) => {
  // console.log(data);
  if (data[0].drapeau != undefined) {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.cardList}>
          {data.map((item, index) => (
            <Card key={index} img={item.drapeau} title={item.pays} id={item.id}/>
          ))}
        </View>
      </ScrollView>
    );
  } else {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.transportCard}>
          {data.map((item, index) => (
            <Card key={index} img={item.icone} title={item.transport} />
          ))}
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  drinkImage: {
    position: "absolute",
    top: 60,
  },
  cardList: {
    position: "relative",
    // top: -20,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
  },
  card: {
    width: 120,
    height: 100,
    marginRight: 30,
    borderRadius: 8,
    borderColor: "#132D2F",
    borderWidth: 2,
  },
  body: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    // paddingHorizontal: 8,
  },
  checkbox: {
    top: 4,
    left: 4,
  },
  countryFlag: {
    fontSize: 36,
  },
  countryTitle: {
    marginVertical: 4,
    fontSize: 16,
    fontFamily: "Nerko_One",
  },
  image: {
    // width: "100%",
    // height: "100%",
    // resizeMode: "cover",
  },
  title: {
    // position: "relative",
    // bottom: 0,
    // left: 0,
    // right: 0,
    padding: 8,
    // backgroundColor: "red",
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
  },
  transportCard: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default JourneyCard;
