import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const SocialCard = ({ title, imageSource, description, username, picture }) => {
  return (
    <View style={styles.socialCard}>
      <Image source={imageSource} style={styles.socialImage} />
      <Text style={styles.socialTitle}>{title}</Text>
      <Text style={styles.socialDescription}>{description}</Text>
      <View style={styles.profile}>
        <Image source={picture} style={styles.pictureProfile} />
        <Text style={styles.textProfile}>{username}</Text>
      </View>
    </View>
  );
};

const imageSource = require("../../assets/image/socialTrip1.png");

const SocialCardList = ({ data, users }) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.socialCardList}>
        {data.map((item, index) => (
          <SocialCard
            key={index}
            title={item.title}
            imageSource={item.imageSource}
            description={item.description}
            username={users[0].username}
            picture={users[0].picture}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  socialCardList: {
    flexDirection: "row",
    marginBottom: 60,
    // position: "absolute",
    // top: 350,
    // alignItems: "center",
    // justifyContent: "space-between",
  },
  socialCard: {
    width: 190,
    height: 230,
    borderRadius: 8,
    overflow: "hidden",
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 24,
  },
  socialImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  socialTitle: {
    position: "absolute",
    bottom: 55,
    left: 8,
    padding: 8,
    fontSize: 20,
    color: "#fff",
    fontFamily: "Nerko_One",
  },
  socialDescription: {
    position: "absolute",
    bottom: 35,
    left: 16,
    right: 0,
    color: "#fff",
    fontSize: 12,
    fontFamily: "ClashDisplay_regular",
    paddingHorizontal: 4,
  },
  profile: {
    width: "100%",
    left: 16,
    bottom: 24,
    flexDirection: "row",
  },
  pictureProfile: {
    width: "10%",
    height: 20,
    borderRadius: 80,
  },
  textProfile: {
    color: "#fff",
    fontSize: 10,
    fontFamily: "Montserrat_medium",
    alignSelf: "center",
    marginLeft: 8,
  },
});

export default SocialCardList;
