import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text> Plan home page </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
