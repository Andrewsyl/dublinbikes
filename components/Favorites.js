import {
  Button,
  SafeAreaView,
  View,
  Text,
  CustomHeader,
  AsyncStorage,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { Component, useEffect, useState, TouchableOpacity } from "react";

export default function Favorites(props) {
  const [stationData, setStationData] = useState([]);
  const [test, setFav] = useState([]);

  const remove = async (station) => {
    try {
      await AsyncStorage.removeItem(station);
      console.log(station);
      load();
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    setFav([]);
    try {
      AsyncStorage.getAllKeys((err, keys) => {
        AsyncStorage.multiGet(keys, (error, stores) => {
          console.log(stores);
          stores.map((result, i, store) => {
            let key = store[i][0];
            let value = store[i][1];
            setFav((oldArray) => [...oldArray, JSON.parse(value)]);
          });
        });
      });
      // console.log(test);
    } catch (err) {
      alert(err);
    }
  };
  return (
    <ScrollView>
      <View>
        {test.map((station) => (
          <View key={station.name} style={styles.item}>
            <Text onPress={() => remove(JSON.stringify(station.name))}>
              {station.name}
            </Text>
            <Text>{station.available_bike_stands}</Text>
            <Text>{station.bike_stands}</Text>
          </View>
        ))}
        <Button title="Hit me" onPress={() => load()}></Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
  },
});
