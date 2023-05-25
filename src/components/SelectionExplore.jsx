import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const SelectionCard = ({ image, title, description }) => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.selectionCard}>
      <View style={styles.cardGuide}>
        <Image source={image} style={styles.selectionImage} />
        <View style={styles.selectionDescription}>
          <Text style={styles.descriptionText}>{title}</Text>
        </View>
        <View style={styles.selectionCategory}>
          <Text style={styles.categoryText}>{description}</Text>
        </View>
      </View>
    </View>
  );
};

const SelectionExplore = ({ data, selectionTitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.selectionTitle}>{selectionTitle}</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <SelectionCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  selectionCard: {
    height: 130,
    marginLeft: 24,
  },
  selectionTitle: {
    fontFamily: "ClashDisplay_bold",
    fontSize: 20,
    color: "#132D2F",
    marginLeft: 16,
  },
  cardGuide: {
    width: 160,
    height: 100,
    top: 16,
    borderColor: "#132D2F",
    borderWidth: 2,
    borderRadius: 16,
  },
  selectionDescription: {
    position: "fixed",
    width: "50%",
    height: 20,
    left: 4,
    top: -46,
    backgroundColor: "white",
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: "center",
    zIndex: 99,
  },
  descriptionText: {
    position: "absolute",
    fontFamily: "Montserrat_medium",
    fontSize: 10,
    alignSelf: "center",
  },
  selectionCategory: {
    position: "absolute",
    width: "99%",
    bottom: 0,
    backgroundColor: "#ffff",
    alignSelf: "center",
    paddingHorizontal: "10%",
    borderBottomLeftRadius: 14,
    borderBottomEndRadius: 14,
  },
  categoryText: {
    paddingTop: 2,
    fontSize: 12,
    fontFamily: "Nerko_One",
    textAlign: "center",
  },
  selectionImage: {
    width: "100%",
    height: "100%",
    borderRadius: 14,
  },
});

export default SelectionExplore;
