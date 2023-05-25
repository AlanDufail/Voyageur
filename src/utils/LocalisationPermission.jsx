import React, { useEffect } from "react";
import { View, Text } from "react-native";
import * as Location from "expo-location";

const LocalisationPermission = () => {
  useEffect(() => {
    const getLocationPermission = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
          const secondRequest =
            await Location.requestForegroundPermissionsAsync();

          if (secondRequest.status !== "granted") {
            console.log(
              "L'application ne peut pas fonctionner correctement sans l'autorisation d'accéder à la localisation."
            );
            return;
          }
        }

        Location.startLocationUpdatesAsync("LOCATION_TASK_NAME", {
          accuracy: Location.Accuracy.BestForNavigation,
          timeInterval: 5000,
          distanceInterval: 10,
        });
      } catch (error) {
        console.log(
          "Erreur lors de la demande d'autorisation de localisation :",
          error
        );
      }
    };

    getLocationPermission();
  }, []);

  return (
    <View>
      <Text>Mon application React Native</Text>
    </View>
  );
};

export default LocalisationPermission;
