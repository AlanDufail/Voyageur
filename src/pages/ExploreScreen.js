// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from "react-native";

const ExploreScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <Text style={{ fontSize: 18, textAlign: "center", color: "grey" }}>
          Explore Screen
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default ExploreScreen;
