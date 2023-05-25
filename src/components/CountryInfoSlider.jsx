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

const CountryInfoSlider = ({search}) => {
  const [displayMode, setDisplayMode] = useState("keyinfo"); // État pour suivre le mode d'affichage
  const [displayHealth, setDisplayHealth] = useState("general_health");

  console.log(search);

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
    {
      "name": "France",
      "image": "🇫🇷",
      "majorCities": [
        { "name": "Paris" },
        { "name": "Marseille" },
        { "name": "Lyon" },
        { "name": "Toulouse" },
        { "name": "Nice" },
        { "name": "Nantes" },
        { "name": "Strasbourg" }
      ],
      "phone_dial": "+33",
      "mobile_operators": [
        { "name": "Orange" },
        { "name": "SFR" },
        { "name": "Bouygues Telecom" },
        { "name": "Free" }
      ],
      "mobile_image": require("../../assets/image/mobile.png"),
      "plug_types": [
        {
          "name": "Type C",
          "image": require("../../assets/image/plug_c.png")
        },
        {
          "name": "Type E",
          "image": require("../../assets/image/plug_e.png")
        },
        {
          "name": "Type F",
          "image": require("../../assets/image/plug_f.png")
        }
      ],
      "languages": [
        { "name": "Français" }
      ],
      "airports": [
        { "name": "Aéroport de Paris-Charles-de-Gaulle" },
        { "name": "Aéroport de Paris-Orly" },
        { "name": "Aéroport de Nice-Côte d'Azur" }
      ],
      "airport_image": require("../../assets/image/airport1.png"),
      "driving_side": "Right",
      "driving_image": require("../../assets/image/right_side.png"),
      "currency": "Euro (€)",
      "emergencyList": [
        {
          "logo": "🚔",
          "label": "Police",
          "phone_number": "17"
        },
        {
          "logo": "🚒",
          "label": "Pompiers",
          "phone_number": "18"
        },
        {
          "logo": "🚑",
          "label": "Ambulance",
          "phone_number": "15"
        }
      ],
      "visa": "🛂 Pas nécessaire pour les ressortissants de l'UE et de l'espace Schengen",
      "medical_info": [
        {
          "title": "Sécurité de l'eau",
          "label": "L'eau du robinet est généralement sûre à boire"
        },
        {
          "title": "Vaccination",
          "label": "Aucune vaccination spécifique requise"
        },
        {
          "title": "Assurance maladie",
          "label": "Il est recommandé de souscrire une assurance maladie"
        }
      ],
      "medical_covid": {
        "last_update": "06 janvier 2023",
        "isOpen": true,
        "travel_restriction": [
          {
            "title": "Quarantaine",
            "image": require("../../assets/image/Home.png"),
            "required": "Non requis"
          },
          {
            "title": "Statut d'entrée",
            "image": require("../../assets/image/Enter.png"),
            "required": "Non requis"
          },
          {
            "title": "Test Covid",
            "image": require("../../assets/image/Vector.png"),
            "required": "Non requis"
          }
        ],
        "mask": [
          {
            "title": "Masque",
            "image": require("../../assets/image/Enter.png"),
            "required": "Requis dans certains cas"
          },
          {
            "title": "Restaurants et bars",
            "image": require("../../assets/image/Home.png"),
            "required": "Conseillé"
          },
          {
            "title": "Transport public",
            "image": require("../../assets/image/Vector.png"),
            "required": "Conseillé"
          }
        ]
      }
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

    // Ajoutez les données pour les autres pays
  ];

  // const countriesData = require("../../assets/data/countryData.json")

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
          <Text style={styles.capitalText}>{search[0].name}</Text>
          <Image source={img} style={styles.capitalImage} />
        </View>

        <Text style={styles.keyInfoTtile}>Villes majeurs</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.majorCities}
        >
          {search[0].majorCities.map((country, index) => (
            <View style={styles.city} key={index}>
              <Text style={styles.cityText}>{country.name}</Text>
            </View>
          ))}
        </ScrollView>

        <Text style={styles.keyInfoTtile}>Code de composition</Text>
        <Text style={styles.phone_dial}> {search[0].phone_dial}</Text>

        <Text style={styles.keyInfoTtile}>Mobile operators</Text>
        <View style={styles.mobileOperators}>
          {search[0].mobile_operators.map((item, index) => (
            <View key={index} style={styles.mobile}>
              <Image
                source={search[0].mobile_image}
                style={styles.mobileImage}
              />
              <Text style={styles.mobileLabel}>{item.name}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.keyInfoTtile}>Type de prise</Text>
        <View style={styles.plugTypes}>
          {search[0].plug_types.map((item, index) => (
            <View key={index} style={styles.plug}>
              <Image source={item.image} style={styles.plugImage} />
              <Text style={styles.plugName}>{item.name}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.keyInfoTtile}>Langue officiel</Text>
        {search[0].languages.map((item, index) => (
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
          {search[0].airports.map((item, index) => (
            <View key={index} style={styles.mobile}>
              <Image
                source={search[0].airport_image}
                style={styles.airportImage}
              />
              <Text style={styles.mobileLabel}>{item.name}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.keyInfoTtile}>Driving side</Text>
        <View style={styles.drivingInfo}>
          <Text style={styles.capitalText}>
            {search[0].driving_side}
          </Text>
          <Image
            source={search[0].driving_image}
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
        <Text style={styles.currency}>{search[0].currency}</Text>
      </View>
    );
  };

  const renderEmergency = () => {
    return (
      <View style={[styles.container, styles.containerKeyInfo]}>
        <Text style={styles.emergencyTitle}>Numéros d'urgence</Text>
        {search[0].emergencyList.map((item, index) => (
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
          <Text style={styles.currency}>{search[0].visa}</Text>
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
        {search[0].medical_info.map((item, index) => (
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
            France -> {search[0].name}
          </Text>
          <Text style={styles.lastUpdate}>
            Dernière mise à jours: {search[0].medical_covid.last_update}
          </Text>
        </View>
        <View style={styles.openCountry}>
          <Image
            source={require("../../assets/image/sun.png")}
            style={styles.openCountryImage}
          />
          <Text style={styles.openCountryText}>
            {search[0].medical_covid.isOpen === true
              ? "Ouvert"
              : "Fermé"}
          </Text>
          <Text style={styles.openCountryDesc}>
            *{search[0].name} est{" "}
            {search[0].medical_covid.isOpen === true
              ? "ouvert"
              : "fermé"}{" "}
            aux touristes
          </Text>
        </View>
        <View style={styles.travel}>
          <Text style={styles.emergencyTitle}>Restriction de voyage</Text>
          {search[0].medical_covid.travel_restriction.map(
            (item, index) => (
              <View key={index} style={styles.restriction}>
                <Image source={item.image} style={styles.restrictionImage} />
                <View>
                  <Text style={styles.restrictionTitle}>{item.title}</Text>
                  <Text style={styles.restrictionDesc}>{item.required}</Text>
                </View>
              </View>
            )
          )}
        </View>
        <View style={styles.other}>
          <Text style={styles.emergencyTitle}>Masques :</Text>
          {search[0].medical_covid.mask.map((item, index) => (
            <View key={index} style={styles.restriction}>
              <Image source={item.image} style={styles.restrictionImage} />
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
    bottom: 8,
    left: 40,
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
    maxWidth: 30,
    maxHeight: 30,
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
