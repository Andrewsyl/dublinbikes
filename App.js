import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps"; // remove PROVIDER_GOOGLE import if not using Google Maps
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./components/HomeScreen";
import AboutScreen from "./components/AboutScreen";
import Map from "./components/Map";
import MyDrawer from "./components/Drawer";

import "react-native-gesture-handler";
// import MyDrawer from "./components/Drawer";
// import Map from "./components/Map";
// import { DB_API } from "@env";
// import Fetch from "./components/bike_data";

// const DB_API = process.env.DB_API_KEY;

const Screen = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

console.log("YES");
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  mapContainer: {
    width: Screen.width,
    height: Dimensions.get("window").height,
  },
  mapDrawerOverlay: {
    right: 50,
    opacity: 0.0,
    height: "100%",
    width: 100,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
});

const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator initialRouteName="Map">
//       <Drawer.Screen name="Home" component={HomeScreen} />
//       <Drawer.Screen name="About" component={AboutScreen} />
//       <Drawer.Screen name="Map" component={Map} />
//     </Drawer.Navigator>
//   );
// }

function App() {
  return (
    <NavigationContainer>
      <MyDrawer style={styles.mapDrawerOverlay} />
    </NavigationContainer>
  );
}

export default App;
