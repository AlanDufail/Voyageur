import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);

  const handleSearch = () => {
    // Effectuez ici l'action de recherche souhaitée
    console.log("Recherche :", searchText);
  };

  const img = require("../../assets/image/filter_icon.png");
  const searchIcon = require("../../assets/image/Search_icon.png");

  return (
    <View style={styles.container}>
      <View style={styles.searchbar}>
        <TextInput
          style={styles.input}
          placeholder="Recherche"
          placeholderTextColor={"#132D2F"}
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
        />
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Image source={searchIcon} style={styles.btnImg}/>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleSearch} style={styles.filterButton}>
        <Image source={img} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    // top: 250,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    maxHeight: 45,

  },
  searchbar: {
    width: "70%",
    backgroundColor: "#FAE5D2",
    borderRadius: 12,
    borderColor: "#132D2F",
    borderWidth: 2,
    paddingLeft: 32,
    marginTop: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    height: 45,
    color: "#132D2F",
  },
  button: {
    position: "absolute",
    width: "12%",
    height: "100%",
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  btnImg: {
    position: "relative",
    alignSelf: "center",
    top: 8,
  },
  filterButton: {
    marginTop: 8,
    position: "relative",
    width: "10%",
    maxHeight: 40,
    // marginTop: 25,
    backgroundColor: "#FAE5D2",
    borderRadius: 12,
    borderColor: "#132D2F",
    borderWidth: 2,
    paddingLeft: 32,
    justifyContent: "center",
    alignContent: "center",
  },
  image: {
    position: "absolute",
    margin: 8,
  },
});

export default SearchBar;
