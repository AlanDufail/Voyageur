import React from "react";
import { Text, StyleSheet, View, FlatList, ScrollView } from "react-native";

import CompleteMap from "../components/CompleteMap";
import MyPassport from "../components/MyPassport";
import Parameters from "../components/Parameters";

const Passport = () => {
  return (
    <View style={styles.container}>
      <ScrollView >
        <CompleteMap />
        <Parameters />
      </ScrollView>
      {/* // <FlatList
      //   data={[{ key: "map" }, { key: "passport" }, { key: "parameters" }]}
      //   renderItem={({ item }) => {
      //     if (item.key === "map") {
      //       return <
      //     } 
      //     // else if (item.key === "passport") {
      //     //   return <MyPassport />;
      //     // }
      //      else if (item.key === "parameters") {
      //       return 
      //     }
      //   }}
      //   keyExtractor={(item) => item.key}
      //   showsVerticalScrollIndicator={false}
      // /> */}
       {/* <Text> Page du passeport </Text>  */}
    </View>
  );
};

export default Passport;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#132D2F",
  },
});
