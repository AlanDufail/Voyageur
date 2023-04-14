import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Modal } from "react-native";
import LottieView from "lottie-react-native";

const SplashScreen = (props) => {

  const animationRef = useRef();
  const [animationPlayedOnce, setAnimationPlayedOnce] = useState(false);

  const handleAnimationFinish = () => {
    setAnimationPlayedOnce(true);
  };

  const isModalVisible = !(props.isSplashScreenVisible && animationPlayedOnce);


  return (
    <Modal visible={isModalVisible} animationType="fade">
      <LottieView
        ref={animationRef}
        source={require("../../assets/voyageur.gif")}
        loop={false}
        autoPlay={true}
        style={styles.container}
      />
    </Modal>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    width: "100%",
  },
});
