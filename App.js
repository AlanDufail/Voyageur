import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNav from "./src/components/tabNav";
import SplashScreen from "./src/view/splashscreen";

export default function App() {
  return (
    <SplashScreen />
    // <NavigationContainer>
    //     <TabNav />
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
