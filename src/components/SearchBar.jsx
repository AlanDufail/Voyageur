import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const [isFilterModalVisible, setFilterModalVisible] = useState(false);

  // const handleSearch = () => {
  //   // Effectuez ici l'action de recherche souhaitée
  //   console.log("jENVOIE :", searchText);
  //   onSearch(searchText); // Appel de la fonction de rappel avec la valeur de recherche

  // };

  const handleSearch = () => {
    // Effectuer ici l'action de recherche souhaitée
    let searchResults = countriesData.filter((country) => {
      // Rechercher dans le nom du pays et les noms des grandes villes
      let countryName = country.name.toLowerCase();
      let cityNames = country.majorCities.map((city) =>
        city.name.toLowerCase()
      );
      const searchTerm = searchText.toLowerCase();
      return countryName.includes(searchTerm) || cityNames.includes(searchTerm);
    });

    // Appel de la fonction de rappel avec les résultats de recherche
    onSearch(searchResults);
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
          <Image source={searchIcon} style={styles.btnImg} />
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

const countriesData = [
  {
    name: "France",
    image: "🇫🇷",
    majorCities: [
      { name: "Paris" },
      { name: "Marseille" },
      { name: "Lyon" },
      { name: "Toulouse" },
      { name: "Nice" },
      { name: "Nantes" },
      { name: "Strasbourg" },
    ],
    phone_dial: "+33",
    mobile_operators: [
      { name: "Orange" },
      { name: "SFR" },
      { name: "Bouygues Telecom" },
      { name: "Free" },
    ],
    mobile_image: require("../../assets/image/mobile.png"),
    plug_types: [
      {
        name: "Type C",
        image: require("../../assets/image/plug_c.png"),
      },
      {
        name: "Type E",
        image: require("../../assets/image/plug_e.png"),
      },
      {
        name: "Type F",
        image: require("../../assets/image/plug_f.png"),
      },
    ],
    languages: [{ name: "Français" }],
    airports: [
      { name: "Aéroport de Paris-Charles-de-Gaulle" },
      { name: "Aéroport de Paris-Orly" },
      { name: "Aéroport de Nice-Côte d'Azur" },
    ],
    airport_image: require("../../assets/image/airport1.png"),
    driving_side: "Right",
    driving_image: require("../../assets/image/right_side.png"),
    currency: "Euro (€)",
    emergencyList: [
      {
        logo: "🚔",
        label: "Police",
        phone_number: "17",
      },
      {
        logo: "🚒",
        label: "Pompiers",
        phone_number: "18",
      },
      {
        logo: "🚑",
        label: "Ambulance",
        phone_number: "15",
      },
    ],
    visa: "🛂 Pas nécessaire pour les ressortissants de l'UE et de l'espace Schengen",
    medical_info: [
      {
        title: "Sécurité de l'eau",
        label: "L'eau du robinet est généralement sûre à boire",
      },
      {
        title: "Vaccination",
        label: "Aucune vaccination spécifique requise",
      },
      {
        title: "Assurance maladie",
        label: "Il est recommandé de souscrire une assurance maladie",
      },
    ],
    medical_covid: {
      last_update: "06 janvier 2023",
      isOpen: true,
      travel_restriction: [
        {
          title: "Quarantaine",
          image: require("../../assets/image/Home.png"),
          required: "Non requis",
        },
        {
          title: "Statut d'entrée",
          image: require("../../assets/image/Enter.png"),
          required: "Non requis",
        },
        {
          title: "Test Covid",
          image: require("../../assets/image/Vector.png"),
          required: "Non requis",
        },
      ],
      mask: [
        {
          title: "Masque",
          image: require("../../assets/image/Enter.png"),
          required: "Requis dans certains cas",
        },
        {
          title: "Restaurants et bars",
          image: require("../../assets/image/Home.png"),
          required: "Conseillé",
        },
        {
          title: "Transport public",
          image: require("../../assets/image/Vector.png"),
          required: "Conseillé",
        },
      ],
    },
  },
  {
    name: "Italie",
    image: "🇮🇹",
    majorCities: [
      {
        name: "Rome",
      },
      {
        name: "Turin",
      },
      {
        name: "Milano",
      },
      {
        name: "Venise",
      },
      {
        name: "Florence",
      },
      {
        name: "Bologne",
      },
      {
        name: "Naples",
      },
    ],
    phone_dial: "+59",
    mobile_operators: [
      {
        name: "TIM",
      },
      {
        name: "Vodafone",
      },
      {
        name: "Wind tree",
      },
      {
        name: "Iliad",
      },
    ],
    mobile_image: require("../../assets/image/mobile.png"),
    plug_types: [
      {
        name: "Type C",
        image: require("../../assets/image/plug_c.png"),
      },
      {
        name: "Type F",
        image: require("../../assets/image/plug_f.png"),
      },
      {
        name: "Type L",
        image: require("../../assets/image/plug_L.png"),
      },
    ],
    languages: [
      {
        name: "Italien",
      },
    ],
    airports: [
      {
        name: "Aéroport de Rome",
      },
      {
        name: "Aéroport de Milan",
      },
      {
        name: "Aéroport de Venise",
      },
    ],
    airport_image: require("../../assets/image/airport1.png"),
    driving_side: "Left",
    driving_image: require("../../assets/image/left_side.png"),
    currency: "Euro (€)",
    emergencyList: [
      {
        logo: "🚔",
        label: "Police",
        phone_number: "113",
      },
      {
        logo: "🚒",
        label: "Pompier",
        phone_number: "112",
      },
      {
        logo: "🚑",
        label: "Ambulance",
        phone_number: "115",
      },
    ],
    visa: " 🪪        CNI ou Visa bligatoire",
    medical_info: [
      {
        title: "sécurité de l'eau",
        label: "Exercice caution",
      },
      {
        title: "Vaccination",
        label: "Le tétanos, la diphtérie, la coqueluche et la rougeole",
      },
      {
        title: "Carte européenne d'assurance maladie",
        label: "Demander une carte européenne d'assurance maladie (CEAM).",
      },
    ],
    medical_covid: {
      last_update: "06 janvier 2023",
      isOpen: true,
      travel_restriction: [
        {
          title: "Quarantaine",
          image: require("../../assets/image/Home.png"),
          required: "non requis",
        },
        {
          title: "Entry status",
          image: require("../../assets/image/Enter.png"),
          required: "non requis",
        },
        {
          title: "Covid test",
          image: require("../../assets/image/Vector.png"),
          required: "non requis",
        },
      ],
      mask: [
        {
          title: "Masque",
          image: require("../../assets/image/Enter.png"),
          required: "Requis dans certains cas",
        },
        {
          title: "Restaurant & bars",
          image: require("../../assets/image/Home.png"),
          required: "non requis",
        },
        {
          title: "Transport public",
          image: require("../../assets/image/Vector.png"),
          required: "Conseillé",
        },
      ],
    },
  },
  {
    name: "Canada",
    image: "🇨🇦",
    majorCities: [
      { name: "Toronto" },
      { name: "Montréal" },
      { name: "Vancouver" },
      { name: "Calgary" },
      { name: "Ottawa" },
      { name: "Québec" },
      { name: "Edmonton" },
    ],
    phone_dial: "+1",
    mobile_operators: [
      { name: "Rogers" },
      { name: "Bell" },
      { name: "Telus" },
      { name: "Freedom Mobile" },
    ],
    mobile_image: require("../../assets/image/mobile.png"),
    plug_types: [
      {
        name: "Type A",
        image: require("../../assets/image/plug_a.png"),
      },
      {
        name: "Type B",
        image: require("../../assets/image/plug_b.png"),
      },
      {
        name: "Type C",
        image: require("../../assets/image/plug_c.png"),
      },
    ],
    languages: [{ name: "Anglais" }, { name: "Français" }],
    airports: [
      { name: "Aéroport de Toronto" },
      { name: "Aéroport de Vancouver" },
      { name: "Aéroport de Montréal" },
    ],
    airport_image: require("../../assets/image/airport1.png"),
    driving_side: "Right",
    driving_image: require("../../assets/image/right_side.png"),
    currency: "Dollar canadien ($)",
    emergencyList: [
      {
        logo: "🚔",
        label: "Police",
        phone_number: "911",
      },
      {
        logo: "🚒",
        label: "Pompiers",
        phone_number: "911",
      },
      {
        logo: "🚑",
        label: "Ambulance",
        phone_number: "911",
      },
    ],
    visa: "🪪 Pas nécessaire pour la plupart des pays",
    medical_info: [
      {
        title: "Sécurité de l'eau",
        label: "L'eau du robinet est généralement sûre à boire",
      },
      {
        title: "Vaccination",
        label: "Aucune vaccination spécifique requise",
      },
      {
        title: "Assurance maladie",
        label: "Il est recommandé de souscrire une assurance maladie",
      },
    ],
    medical_covid: {
      last_update: "06 janvier 2023",
      isOpen: true,
      travel_restriction: [
        {
          title: "Quarantaine",
          image: require("../../assets/image/Home.png"),
          required: "Non requis",
        },
        {
          title: "Statut d'entrée",
          image: require("../../assets/image/Enter.png"),
          required: "Non requis",
        },
        {
          title: "Test Covid",
          image: require("../../assets/image/Vector.png"),
          required: "Non requis",
        },
      ],
      mask: [
        {
          title: "Masque",
          image: require("../../assets/image/Enter.png"),
          required: "Requis dans certains cas",
        },
        {
          title: "Restaurants et bars",
          image: require("../../assets/image/Home.png"),
          required: "Conseillé",
        },
        {
          title: "Transport public",
          image: require("../../assets/image/Vector.png"),
          required: "Conseillé",
        },
      ],
    },
  },
  {
    name: "Japon",
    image: "🇯🇵",
    majorCities: [
      { name: "Tokyo" },
      { name: "Osaka" },
      { name: "Kyoto" },
      { name: "Hiroshima" },
      { name: "Yokohama" },
      { name: "Nagoya" },
      { name: "Sapporo" },
    ],
    phone_dial: "+81",
    mobile_operators: [
      { name: "NTT Docomo" },
      { name: "SoftBank" },
      { name: "au by KDDI" },
    ],
    mobile_image: require("../../assets/image/mobile.png"),
    plug_types: [
      {
        name: "Type A",
        image: require("../../assets/image/plug_a.png"),
      },
      {
        name: "Type B",
        image: require("../../assets/image/plug_b.png"),
      },
      {
        name: "Type C",
        image: require("../../assets/image/plug_c.png"),
      },
    ],
    languages: [{ name: "Japonais" }],
    airports: [
      { name: "Aéroport de Tokyo" },
      { name: "Aéroport d'Osaka" },
      { name: "Aéroport de Nagoya" },
    ],
    airport_image: require("../../assets/image/airport1.png"),
    driving_side: "Left",
    driving_image: require("../../assets/image/left_side.png"),
    currency: "Yen (¥)",
    emergencyList: [
      {
        logo: "🚔",
        label: "Police",
        phone_number: "110",
      },
      {
        logo: "🚒",
        label: "Pompiers",
        phone_number: "119",
      },
      {
        logo: "🚑",
        label: "Ambulance",
        phone_number: "119",
      },
    ],
    visa: "🎌 Pas nécessaire pour les séjours touristiques de moins de 90 jours",
    medical_info: [
      {
        title: "Sécurité de l'eau",
        label: "L'eau du robinet est généralement sûre à boire",
      },
      {
        title: "Vaccination",
        label: "Aucune vaccination spécifique requise",
      },
      {
        title: "Assurance maladie",
        label: "Il est recommandé de souscrire une assurance maladie",
      },
    ],
    medical_covid: {
      last_update: "06 janvier 2023",
      isOpen: true,
      travel_restriction: [
        {
          title: "Quarantaine",
          image: require("../../assets/image/Home.png"),
          required: "Requise",
        },
        {
          title: "Statut d'entrée",
          image: require("../../assets/image/Enter.png"),
          required: "Non requis",
        },
        {
          title: "Test Covid",
          image: require("../../assets/image/Vector.png"),
          required: "Requis",
        },
      ],
      mask: [
        {
          title: "Masque",
          image: require("../../assets/image/Enter.png"),
          required: "Requis dans certains cas",
        },
        {
          title: "Restaurants et bars",
          image: require("../../assets/image/Home.png"),
          required: "Conseillé",
        },
        {
          title: "Transport public",
          image: require("../../assets/image/Vector.png"),
          required: "Conseillé",
        },
      ],
    },
  },
  {
    name: "États-Unis d'Amérique",
    image: "🇺🇸",
    majorCities: [
      { name: "New York" },
      { name: "Los Angeles" },
      { name: "Chicago" },
      { name: "San Francisco" },
      { name: "Miami" },
      { name: "Las Vegas" },
      { name: "Washington, D.C." },
    ],
    phone_dial: "+1",
    mobile_operators: [
      { name: "AT&T" },
      { name: "Verizon" },
      { name: "T-Mobile" },
    ],
    mobile_image: require("../../assets/image/mobile.png"),
    plug_types: [
      {
        name: "Type A",
        image: require("../../assets/image/plug_a.png"),
      },
      {
        name: "Type B",
        image: require("../../assets/image/plug_b.png"),
      },
    ],
    languages: [{ name: "Anglais" }],
    airports: [
      { name: "Aéroport de New York" },
      { name: "Aéroport de Los Angeles" },
      { name: "Aéroport de Chicago" },
    ],
    airport_image: require("../../assets/image/airport1.png"),
    driving_side: "Right",
    driving_image: require("../../assets/image/right_side.png"),
    currency: "Dollar américain ($)",
    emergencyList: [
      {
        logo: "🚔",
        label: "Police",
        phone_number: "911",
      },
      {
        logo: "🚒",
        label: "Pompiers",
        phone_number: "911",
      },
      {
        logo: "🚑",
        label: "Ambulance",
        phone_number: "911",
      },
    ],
    visa: "🛂 ESTA (Système électronique d'autorisation de voyage) pour les séjours touristiques de moins de 90 jours",
    medical_info: [
      {
        title: "Sécurité de l'eau",
        label: "L'eau du robinet est généralement sûre à boire",
      },
      {
        title: "Vaccination",
        label: "Aucune vaccination spécifique requise",
      },
      {
        title: "Assurance maladie",
        label: "Il est recommandé de souscrire une assurance maladie",
      },
    ],
    medical_covid: {
      last_update: "06 janvier 2023",
      isOpen: true,
      travel_restriction: [
        {
          title: "Quarantaine",
          image: require("../../assets/image/Home.png"),
          required: "Non requis",
        },
        {
          title: "Statut d'entrée",
          image: require("../../assets/image/Enter.png"),
          required: "Non requis",
        },
        {
          title: "Test Covid",
          image: require("../../assets/image/Vector.png"),
          required: "Non requis",
        },
      ],
      mask: [
        {
          title: "Masque",
          image: require("../../assets/image/Enter.png"),
          required: "Requis dans certains cas",
        },
        {
          title: "Restaurants et bars",
          image: require("../../assets/image/Home.png"),
          required: "Conseillé",
        },
        {
          title: "Transport public",
          image: require("../../assets/image/Vector.png"),
          required: "Conseillé",
        },
      ],
    },
  },
  {
    name: "Espagne",
    image: "🇪🇸",
    majorCities: [
      { name: "Madrid" },
      { name: "Barcelone" },
      { name: "Valence" },
      { name: "Séville" },
      { name: "Malaga" },
      { name: "Bilbao" },
      { name: "Alicante" },
    ],
    phone_dial: "+34",
    mobile_operators: [
      { name: "Movistar" },
      { name: "Vodafone" },
      { name: "Orange" },
      { name: "Yoigo" },
    ],
    mobile_image: require("../../assets/image/mobile.png"),
    plug_types: [
      {
        name: "Type C",
        image: require("../../assets/image/plug_c.png"),
      },
      {
        name: "Type F",
        image: require("../../assets/image/plug_f.png"),
      },
    ],
    languages: [{ name: "Espagnol" }],
    airports: [
      { name: "Aéroport de Madrid" },
      { name: "Aéroport de Barcelone" },
      { name: "Aéroport de Valence" },
    ],
    airport_image: require("../../assets/image/airport1.png"),
    driving_side: "Right",
    driving_image: require("../../assets/image/right_side.png"),
    currency: "Euro (€)",
    emergencyList: [
      {
        logo: "🚔",
        label: "Police",
        phone_number: "112",
      },
      {
        logo: "🚒",
        label: "Pompiers",
        phone_number: "112",
      },
      {
        logo: "🚑",
        label: "Ambulance",
        phone_number: "112",
      },
    ],
    visa: "🛂 Pas nécessaire pour les ressortissants de l'UE et de l'espace Schengen",
    medical_info: [
      {
        title: "Sécurité de l'eau",
        label: "L'eau du robinet est généralement sûre à boire",
      },
      {
        title: "Vaccination",
        label: "Aucune vaccination spécifique requise",
      },
      {
        title: "Assurance maladie",
        label: "Il est recommandé de souscrire une assurance maladie",
      },
    ],
    medical_covid: {
      last_update: "06 janvier 2023",
      isOpen: true,
      travel_restriction: [
        {
          title: "Quarantaine",
          image: require("../../assets/image/Home.png"),
          required: "Non requis",
        },
        {
          title: "Statut d'entrée",
          image: require("../../assets/image/Enter.png"),
          required: "Non requis",
        },
        {
          title: "Test Covid",
          image: require("../../assets/image/Vector.png"),
          required: "Non requis",
        },
      ],
      mask: [
        {
          title: "Masque",
          image: require("../../assets/image/Enter.png"),
          required: "Requis dans certains cas",
        },
        {
          title: "Restaurants et bars",
          image: require("../../assets/image/Home.png"),
          required: "Conseillé",
        },
        {
          title: "Transport public",
          image: require("../../assets/image/Vector.png"),
          required: "Conseillé",
        },
      ],
    },
  },
];
