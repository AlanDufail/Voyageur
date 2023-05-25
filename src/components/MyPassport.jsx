import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground
} from "react-native";

const MyPassport = () => {
  const [displayMode, setDisplayMode] = useState("continent"); // État pour suivre le mode d'affichage

  // Données pour la liste des pays par continents
  const continentsData = [
    { name: "Afrique", image: "🌍" },
    { name: "Amérique", image: "🌎" },
    { name: "Asie", image: "🌏" },
    { name: "Europe", image: "🌍" },
    // Ajoutez les données pour les autres continents
  ];

  // Données pour la liste avec possibilité d'ajouter des éléments
  const countriesData = [
    { name: "France", image: "🇫🇷" },
    { name: "Espagne", image: "🇪🇸" },
    { name: "Italie", image: "🇮🇹" },
    // Ajoutez les données pour les autres pays
  ];

  // Fonction pour afficher la liste des pays par continents
  const renderContinentsList = () => {
    return (
      <FlatList
        data={continentsData}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.image}</Text>
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        )}
      />
    );
  };

  // Fonction pour afficher la liste des pays avec possibilité d'ajouter des éléments
  const renderCountriesList = () => {
    return (
      <FlatList
        data={countriesData}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.image}</Text>
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        )}
        ListFooterComponent={
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonLabel}>Ajouter un pays</Text>
          </TouchableOpacity>
        }
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            displayMode === "continent" && styles.activeButton,
          ]}
          onPress={() => setDisplayMode("continent")}
        >
          <Text style={styles.buttonLabel}>Pays visité</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            displayMode === "countries" && styles.activeButton,
          ]}
          onPress={() => setDisplayMode("countries")}
        >
          <Text style={styles.buttonLabel}>Pays a visiter</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        {displayMode === "continent"
          ? renderContinentsList()
          : renderCountriesList()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
    marginRight: 10,
    borderRadius: 10,
  },
  selectedButton: {
    backgroundColor: "blue", // Couleur du bouton sélectionné
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  listContainer: {
    flexGrow: 1,
  },
  countryItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  countryImage: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 20,
  },
  countryName: {
    fontSize: 16,
  },
  addCountryContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  addButton: {
    backgroundColor: "green",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  addButtonLabel: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
});

export default MyPassport;
