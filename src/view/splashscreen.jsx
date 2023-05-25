import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Modal, View, Image } from "react-native";
import LottieView from "lottie-react-native";

const randonee = require("../../assets/randonne.json");

const SplashScreen = (props) => {


  return (
    <View style={styles.container}>
      <Modal animationType="fade" style={{backgroundColor:"red"}}>
        <LottieView
          source={randonee}
          loop={true}
          autoPlay={true}
        />
      </Modal>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#FFFAF5",
  },
});
