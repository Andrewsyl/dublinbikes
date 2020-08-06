import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps"; // remove PROVIDER_GOOGLE import if not using Google Maps
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./components/HomeScreen";
import AboutScreen from "./components/AboutScreen";
import "react-native-gesture-handler";
import Map from "./components/Map";
// import Fetch from "./components/bike_data";

const API = `https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=32828b19f2a2b01425aafec8185f8c23d5312a0b`;

console.log("YES");
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const Drawer = createDrawerNavigator();

function App() {
  const [selectedStation, setStation] = useState(null);
  const [stationData, setStationData] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=32828b19f2a2b01425aafec8185f8c23d5312a0b`
    ).then((response) =>
      response.json().then((data) => {
        setStationData(data);
        console.log("TEST");
      })
    );
  }, []);
  return (
    <View style={styles.container}>
      <Map stationdata={this.props.station} />
    </View>
  );
  // return (
  //   <NavigationContainer>
  //     <Drawer.Navigator initialRouteName="Home">
  //       <Drawer.Screen name="Home" component={HomeScreen} />
  //       <Drawer.Screen name="About" component={AboutScreen} />
  //     </Drawer.Navigator>
  //   </NavigationContainer>
  // );
}

export default App;
