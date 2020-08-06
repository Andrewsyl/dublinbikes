import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

const API = `https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=32828b19f2a2b01425aafec8185f8c23d5312a0b`;

const Fetch = () => {
  const [selectedStation, setStation] = useState(null);
  const [stationData, setStationData] = useState([]);
  useEffect(() => {
    fetch(API).then((response) =>
      response.json().then((data) => {
        console.log(data);
        setStationData(data);
      })
    );
  }, []);
  return <Text>{data}</Text>;
};

export default Fetch;

//   return; // <View style={styles.container}>
//   <MapView
//     provider={PROVIDER_GOOGLE} // remove if not using Google Maps
//     style={styles.map}
//     {stationData.map((station) => (
//       <Marker
//         labelStyle={{ color: "yellow" }}
//         // label={JSON.stringify(station.available_bikes)}
//         position={{ lat: station.position.lat, lng: station.position.lng }}
//         onClick={() => {
//           setStation(station);
//           console.log("yes");
//         }}
//       />
//     ))}
//     region={{
//       latitude: 53.336021,
//       longitude: -6.26298,
//       latitudeDelta: 0.015,
//       longitudeDelta: 0.0121,
//     }}
//   ></MapView>
// </View>
