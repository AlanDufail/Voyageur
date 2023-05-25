import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import TabNav from "./src/components/tabNav";
import SplashScreen from "./src/view/splashscreen";


// import useFonts from "./src/utils/useFonts";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(true);


  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return isLoaded ? (
    <View>
      <SplashScreen />
    </View>
  ) : (
    <TabNav />
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    position: "absolute",
  },
});
