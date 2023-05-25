import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";

const CountryInfoSlider = () => {
  const [displayMode, setDisplayMode] = useState("keyinfo"); // État pour suivre le mode d'affichage
  const [displayHealth, setDisplayHealth] = useState("general_health");

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
    // Ajoutez les données pour les autres pays
  ];

  const healthCovid = [
    {
      country: "Italie",
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
  ];

  const img = require("../../assets/image/italie.png");
  const phone = require("../../assets/image/phone.png");
  // const plug_c = require("../../assets/image/plug_c.png");
  // const plug_f = require("../../assets/image/plug_f.png");

  const renderKeyInfo = () => {
    return (
      <View style={[styles.container, styles.containerKeyInfo]}>
        <Text style={styles.keyInfoTtile}>Capitale</Text>
        <View style={styles.capitalInfo}>
          <Text style={styles.capitalText}>{countriesData[2].name}</Text>
          <Image source={img} style={styles.capitalImage} />
        </View>

        <Text style={styles.keyInfoTtile}>Villes majeurs</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.majorCities}
        >
          {countriesData[2].majorCities.map((country, index) => (
            <View style={styles.city} key={index}>
              <Text style={styles.cityText}>{country.name}</Text>
            </View>
          ))}
        </ScrollView>

        <Text style={styles.keyInfoTtile}>Code de composition</Text>
        <Text style={styles.phone_dial}> {countriesData[2].phone_dial}</Text>

        <Text style={styles.keyInfoTtile}>Mobile operators</Text>
        <View style={styles.mobileOperators}>
          {countriesData[2].mobile_operators.map((item, index) => (
            <View key={index} style={styles.mobile}>
              <Image
                source={countriesData[2].mobile_image}
                style={styles.mobileImage}
              />
              <Text style={styles.mobileLabel}>{item.name}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.keyInfoTtile}>Type de prise</Text>
        <View style={styles.plugTypes}>
          {countriesData[2].plug_types.map((item, index) => (
            <View key={index} style={styles.plug}>
              <Image source={item.image} style={styles.plugImage} />
              <Text style={styles.plugName}>{item.name}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.keyInfoTtile}>Langue officiel</Text>
        {countriesData[2].languages.map((item, index) => (
          <Text style={styles.phone_dial} key={index}>
            {item.name}
          </Text>
        ))}
      </View>
    );
  };

  const renderTransport = () => {
    return (
      <View style={[styles.container, styles.containerKeyInfo]}>
        <Text style={styles.keyInfoTtile}>Main airport</Text>
        <View style={styles.mobileOperators}>
          {countriesData[2].airports.map((item, index) => (
            <View key={index} style={styles.mobile}>
              <Image
                source={countriesData[2].airport_image}
                style={styles.airportImage}
              />
              <Text style={styles.mobileLabel}>{item.name}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.keyInfoTtile}>Driving side</Text>
        <View style={styles.drivingInfo}>
          <Text style={styles.capitalText}>
            {countriesData[2].driving_side}
          </Text>
          <Image
            source={countriesData[2].driving_image}
            style={styles.capitalImage}
          />
        </View>
      </View>
    );
  };
  const renderCurrency = () => {
    return (
      <View style={[styles.container, styles.containerKeyInfo]}>
        <Text style={styles.keyInfoTtile}>Currency section</Text>
        <Text style={styles.currency}>{countriesData[2].currency}</Text>
      </View>
    );
  };

  const renderEmergency = () => {
    return (
      <View style={[styles.container, styles.containerKeyInfo]}>
        <Text style={styles.emergencyTitle}>Numéros d'urgence</Text>
        {countriesData[2].emergencyList.map((item, index) => (
          <View style={styles.emergency} key={index}>
            <Text>
              {item.logo} {item.label}
            </Text>
            <Text style={styles.mobileLabel}>{item.phone_number}</Text>
          </View>
        ))}
      </View>
    );
  };

  const renderIdVisa = () => {
    return (
      <View style={[styles.container, styles.containerKeyInfo]}>
        <Text style={styles.emergencyTitle}>Id/visa section</Text>
        <View>
          <Text style={styles.currency}>{countriesData[2].visa}</Text>
          <Text style={styles.currencyParaph}>
            Conseil: Se munir d'une copie imprimé en cas de perte/vol
          </Text>
        </View>
      </View>
    );
  };
  const renderWeather = () => {
    // setDisplayHealth("")
    return (
      <View style={[styles.container, styles.containerKeyInfo]}>
        <Text style={styles.emergencyTitle}>🚧 Underconstruction</Text>
      </View>
    );
  };

  const renderHealth = () => {
    return (
      <View style={[styles.container, styles.containerKeyInfo]}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              displayHealth === "health_general" && styles.activeButton,
            ]}
            onPress={() => setDisplayHealth("health_general")}
          >
            <Text
              style={
                displayHealth === "health_general"
                  ? styles.activeButtonLabel
                  : styles.buttonLabel
              }
            >
              Général
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              displayHealth === "health_covid" && styles.activeButton,
            ]}
            onPress={() => setDisplayHealth("health_covid")}
          >
            <Text
              style={
                displayHealth === "health_covid"
                  ? styles.activeButtonLabel
                  : styles.buttonLabel
              }
            >
              Covid-19
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderHealthGeneral = () => {
    return (
      <View style={[styles.container, styles.containerKeyInfo]}>
        {countriesData[2].medical_info.map((item, index) => (
          <View key={index}>
            <Text style={styles.medicTitle}>{item.title}</Text>
            <Text style={styles.medicParaph}>{item.label}</Text>
          </View>
        ))}
      </View>
    );
  };

  const renderHealthCovid = () => {
    return (
      <View style={[styles.container, styles.containerKeyInfo]}>
        <View style={styles.countryFlow}>
          <Text style={styles.emergencyTitle}>
            France  ->  {countriesData[2].name}
          </Text>
          <Text style={styles.lastUpdate}>
            Dernière mise à jours: {countriesData[2].medical_covid.last_update}
          </Text>
        </View>
        <View style={styles.openCountry}>
          <Image source={require("../../assets/image/sun.png")} style={styles.openCountryImage}/>
          <Text style={styles.openCountryText}>{countriesData[2].medical_covid.isOpen === true ? "Ouvert" : "Fermé"}</Text>
          <Text style={styles.openCountryDesc}>
          *{countriesData[2].name} est {" "}
            {countriesData[2].medical_covid.isOpen === true ? "ouvert" : "fermé"} aux touristes
          </Text>
        </View>
        <View style={styles.travel}>
          <Text style={styles.emergencyTitle}>Restriction de voyage</Text>
          {countriesData[2].medical_covid.travel_restriction.map((item, index) => (
            <View key={index} style={styles.restriction}>
              <Image source={item.image} style={styles.restrictionImage}/>
              <View>
                <Text style={styles.restrictionTitle}>{item.title}</Text>
                <Text style={styles.restrictionDesc}>{item.required}</Text>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.other}>
          <Text style={styles.emergencyTitle}>Masques :</Text>
          {countriesData[2].medical_covid.mask.map((item, index) => (
            <View key={index} style={styles.restriction}>
              <Image source={item.image} style={styles.restrictionImage}/>
              <View>
                <Text style={styles.restrictionTitle}>{item.title}</Text>
                <Text style={styles.restrictionDesc}>{item.required}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.buttonShadow}
        >
          <TouchableOpacity
            style={[
              [styles.button],
              displayMode === "keyInfo" && styles.activeButton,
            ]}
            onPress={() => {
              setDisplayMode("keyInfo"), setDisplayHealth("");
            }}
          >
            <Text style={styles.buttonLogo}>🔑</Text>
            <Text
              style={
                displayMode === "keyInfo"
                  ? styles.activeButtonLabel
                  : styles.buttonLabel
              }
            >
              Info Clé
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              displayMode === "transport" && styles.activeButton,
            ]}
            onPress={() => {
              setDisplayMode("transport"), setDisplayHealth("");
            }}
          >
            <Text style={styles.buttonLogo}>🚘</Text>
            <Text
              style={
                displayMode === "transport"
                  ? styles.activeButtonLabel
                  : styles.buttonLabel
              }
            >
              Transport
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              displayMode === "currency" && styles.activeButton,
            ]}
            onPress={() => {
              setDisplayMode("currency"), setDisplayHealth("");
            }}
          >
            <Text style={styles.buttonLogo}>💵</Text>
            <Text
              style={
                displayMode === "currency"
                  ? styles.activeButtonLabel
                  : styles.buttonLabel
              }
            >
              Devise
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              displayMode === "emergency" && styles.activeButton,
            ]}
            onPress={() => {
              setDisplayMode("emergency"), setDisplayHealth("");
            }}
          >
            <Text style={styles.buttonLogo}>🚨</Text>
            <Text
              style={
                displayMode === "emergency"
                  ? styles.activeButtonLabel
                  : styles.buttonLabel
              }
            >
              Urgences
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              displayMode === "paperVisa" && styles.activeButton,
            ]}
            onPress={() => {
              setDisplayMode("paperVisa"), setDisplayHealth("");
            }}
          >
            <Text style={styles.buttonLogo}>🪪</Text>
            <Text
              style={
                displayMode === "paperVisa"
                  ? styles.activeButtonLabel
                  : styles.buttonLabel
              }
            >
              ID / Visa
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              displayMode === "weather" && styles.activeButton,
            ]}
            onPress={() => {
              setDisplayMode("weather"), setDisplayHealth("");
            }}
          >
            <Text style={styles.buttonLogo}>🌤️</Text>
            <Text
              style={
                displayMode === "weather"
                  ? styles.activeButtonLabel
                  : styles.buttonLabel
              }
            >
              Météo
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button,
              displayMode === "health" && styles.activeButton,
            ]}
            onPress={() => {
              setDisplayMode("health"), setDisplayHealth("");
            }}
          >
            <Text style={styles.buttonLogo}>🏥</Text>
            <Text
              style={
                displayMode === "health"
                  ? styles.activeButtonLabel
                  : styles.buttonLabel
              }
            >
              Médical info
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.contentContainer}>
        {displayMode === "keyInfo" && renderKeyInfo()}
        {displayMode === "transport" && renderTransport()}
        {displayMode === "currency" && renderCurrency()}
        {displayMode === "emergency" && renderEmergency()}
        {displayMode === "paperVisa" && renderIdVisa()}
        {displayMode === "weather" && renderWeather()}
        {displayMode === "health" && renderHealth()}
        {displayHealth === "health_general" && renderHealthGeneral()}
        {displayHealth === "health_covid" && renderHealthCovid()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    // backgroundColor: "white",
    // padding: 20,
  },
  containerKeyInfo: {
    // backgroundColor: "red",
  },
  keyInfoTtile: {
    left: "4%",
    fontSize: 24,
    marginTop: 10,
    fontFamily: "ClashDisplay_bold",
    color: "#132D2F",
  },
  emergency: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 12,
  },
  emergencyTitle: {
    left: "4%",
    fontSize: 24,
    marginTop: 10,
    marginBottom: 16,
    fontFamily: "ClashDisplay_bold",
    color: "#132D2F",
  },
  lastUpdate: {
    left: "8%",
    fontFamily: "Montserrat_medium",
    fontSize: 14,
    opacity: 0.4,
  },
  openCountry: {
    left: "6%",
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#FFFAF5",
    marginVertical: 30,
    padding: 20,
    borderColor: "#132D2F",
    borderWidth: 2,
    borderRadius: 28,
  },
  openCountryImage: {
    position: "absolute",
    top: -40,
    right: 5,
  },
  openCountryText: {
    fontSize: 16,
    fontFamily: "ClashDisplay_bold",
    marginLeft: 8,
    marginRight: 8,
  },
  openCountryDesc: {
    position: "absolute",
    bottom: 12,
    left: 85,
    fontSize: 10,
    fontFamily: "Montserrat_medium",
    opacity: 0.5,
  },
  restriction: {
    flexDirection: "row",
    padding: 20,
  },
  restrictionImage: {
    marginRight: 20,
  },
  restrictionTitle: {
    fontSize: 16,
    fontFamily: "ClashDisplay_bold",
    marginBottom: 8,
  },
  restrictionDesc: {
    fontSize: 16,
    fontFamily: "Montserrat_medium",
    opacity: 0.5,
  },
  medicTitle: {
    left: "4%",
    fontSize: 24,
    marginTop: 10,
    marginBottom: 8,
    fontFamily: "ClashDisplay_bold",
    color: "#132D2F",
  },
  medicParaph: {
    marginLeft: 32,
    fontSize: 14,
    fontFamily: "Montserrat_medium",
    color: "#132D2F",
    opacity: 0.6,
  },
  phone_dial: {
    marginVertical: 10,
    left: "8%",
    fontFamily: "ClashDisplay_bold",
    fontSize: 20,
    color: "#132D2F",
  },
  currency: {
    marginVertical: 10,
    left: "8%",
    fontFamily: "ClashDisplay_bold",
    fontSize: 20,
    color: "#132D2F",
    opacity: 0.6,
  },
  currencyParaph: {
    paddingHorizontal: 30,
    textAlign: "center",
    fontFamily: "Montserrat_medium",
  },
  majorCities: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  mobileOperators: {
    marginTop: 15,
    flexDirection: "column",
  },
  mobile: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    marginHorizontal: 10,
  },
  plugTypes: {
    paddingTop: 10,
    paddingBottom: 10,
    marginHorizontal: 32,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  plug: {
    // padding: 10,
  },
  plugImage: {
    padding: 20,
    borderColor: "#132D2F",
    borderWidth: 2,
    borderRadius: 10,
  },
  plugName: {
    marginTop: 10,
    fontFamily: "ClashDisplay_bold",
    fontSize: 16,
    color: "#132D2F",
  },
  mobileImage: {
    // paddingHorizontal: 10,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#132D2F",
    backgroundColor: "white",
  },
  airportImage: {
    width: 49,
    height: 49,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#132D2F",
    backgroundColor: "white",
  },
  mobileLabel: {
    fontFamily: "ClashDisplay_bold",
    fontSize: 16,
    marginLeft: 20,
  },
  city: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
    borderColor: "#132D2F",
    borderWidth: 2,
    borderRadius: 30,
  },
  cityText: {
    fontSize: 16,
    fontFamily: "Nerko_One",
    color: "#EDA47E",
  },
  capitalInfo: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    left: "5%",
    width: "80%",
    borderRadius: 10,
    borderColor: "#132D2F",
    borderWidth: 2,
    justifyContent: "space-between",
    // backgroundColor: "red",
  },
  capitalText: {
    alignSelf: "center",
    left: "40%",
    fontSize: 20,
    fontFamily: "Nerko_One",
    color: "#EDA47E",
  },
  capitalImage: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  drivingInfo: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    left: "5%",
    width: "80%",
    padding: 10,
    borderRadius: 10,
    borderColor: "#132D2F",
    borderWidth: 2,
    justifyContent: "space-between",
    // backgroundColor: "red",
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 20,
    width: "100%",
  },
  medicBtn: {
    width: "90%",
  },
  button: {
    flex: 1,
    paddingVertical: 2,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFAF5",
    marginRight: 10,
    borderRadius: 10,
    borderColor: "#132D2F",
    borderWidth: 2,
  },
  buttonShadow: {
    modalShadow: "#4D4945",
    shadowOpacity: 0.25,
    shadowOffset: { width: -2, height: 4 },
    shadowRadius: 4,
  },
  buttonLogo: {
    fontSize: 14,
  },
  buttonLabel: {
    marginTop: 4,
    fontSize: 15,
    fontFamily: "Nerko_One",
    color: "#EDA47E",
  },
  activeButtonLabel: {
    marginTop: 4,
    fontSize: 15,
    fontFamily: "Nerko_One",
    color: "white",
  },
  activeButton: {
    // color: "white",
    backgroundColor: "#FB8634",
    borderWidth: 0,
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
  airportImg: {},
});

export default CountryInfoSlider;
