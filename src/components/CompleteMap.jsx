import React from "react";
import { View, Image, ScrollView, Text, StyleSheet } from "react-native";

const CompleteMap = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/image/complete_map.png")}
        style={styles.backgroundImage}
      />
      <ScrollView
        style={styles.listContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.itemContainer}>
          <Text style={styles.itemTextTop}>0%</Text>
          <Text style={styles.itemTextBottom}>de la planète</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemTextTop}>0/10</Text>
          <Text style={styles.itemTextBottom}>regions</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemTextTop}>0/196</Text>
          <Text style={styles.itemTextBottom}>pays</Text>
        </View>

        <View style={styles.itemContainer}>
          <Text style={styles.itemTextTop}>0</Text>
          <Text style={styles.itemTextBottom}>ville(s)</Text>
        </View>
        {/* Ajoutez autant de petits composants que nécessaire  */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    // flex: 1,
    // backgroundColor: "white",
  },
  backgroundImage: {
    width: "100%",
    height: "60%", // Ajustez la hauteur selon vos besoins
    // resizeMode: "cover",
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  itemContainer: {
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    // backgroundColor: "#F5F5F5",
    borderRightWidth: 3,
    borderColor: "#F5F5F5",
  },
  itemTextTop: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "white",
  },
  itemTextBottom: {
    fontSize: 14,
    marginBottom: -10,
    color: "white",
  },
});

export default CompleteMap;
