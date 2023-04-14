import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Explore = () => {
  return (
    <View style={styles.container}>
      <Text> Explore page </Text>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
