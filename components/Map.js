import React, { Component, useEffect, useState, TouchableOpacity } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Button,
  AsyncStorage,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps"; // remove PROVIDER_GOOGLE import if not using Google Maps
import HomeScreen from "./HomeScreen";
import { SafeAreaView } from "react-navigation";

const Screen = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

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
    height: "100%",
  },
});

const MapData = ({ navigation }) => {
  const [stationData, setStationData] = useState([]);
  const [fav, setFav] = useState([]);

  const save = async (station) => {
    try {
      await AsyncStorage.setItem(station.name, JSON.stringify(station.name));
      let test = await AsyncStorage.getItem("Fav");
      if (test !== null) {
        let hi = JSON.parse(test);
        // await AsyncStorage.clear();
        setFav((fav) => [...fav, hi.name]);
      }
    } catch (err) {
      alert(err);
    }
  };

  const load = async () => {
    try {
      let test = await AsyncStorage.getAllKeys();
      if (test !== null) {
        console.log(test);
        setFav(test);
      }
    } catch (err) {
      alert(err);
    }
  };

  const remove = async (station) => {
    try {
      await AsyncStorage.removeItem(station.name);
      load();
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    fetch(
      `https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=32828b19f2a2b01425aafec8185f8c23d5312a0b`
    ).then((response) =>
      response.json().then((data) => {
        setStationData(data);
        console.log(data);
      })
    );
    // load();
  }, []);

  return (
    <View>
      <Text>{fav}</Text>
      <SafeAreaView>
        <Button
          title="YO"
          // navigation.toggleDrawer(),
          onPress={() => navigation.toggleDrawer()}
        />
      </SafeAreaView>
      <MapView
        showsUserLocation={true}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.mapContainer}
        region={{
          latitude: 53.3441204,
          longitude: -6.26298,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
        {stationData.map((station) => (
          <View key={station.position.lat}>
            <Marker
              coordinate={{
                latitude: station.position.lat,
                longitude: station.position.lng,
              }}
              onPress={() => save(station)}
            >
              <Text>{station.available_bikes}</Text>
              <View>
                <Image
                  source={require("../round-bike1.png")}
                  style={{ height: 35, width: 35 }}
                ></Image>
                {/* <Image
                source={require("../round-bike1.png")}
                style={{ height: 35, width: 35 }}
              ></Image> */}
              </View>
              <Callout onPress={() => remove(station)}>
                <View style={{ width: 200 }}>
                  <Text>{station.name}</Text>
                  <Text>{fav.length}</Text>
                </View>
              </Callout>
            </Marker>
          </View>
        ))}
      </MapView>
    </View>
  );
};

export default MapData;
