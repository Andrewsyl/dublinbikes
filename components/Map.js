import React, { Component } from "react";
import { Text, View } from "react-native";

const Map = (props) => {
  <View style={styles.container}>
    <MapView
      showsUserLocation={true}
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={{
        latitude: 53.3441204,
        longitude: -6.26298,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
      {this.props.stationData.map((station) => (
        <Marker
          coordinate={{
            latitude: station.position.lat,
            longitude: station.position.lng,
          }}
        >
          <Image
            source={require("./round-bike1.png")}
            // onLayout={() => setState({ initialRender: false })}
            style={{ height: 35, width: 35 }}
          ></Image>
          <Callout>
            <View style={{ width: 200 }}>
              {/* <Image
                source={require("./round-bike1.png")}
                onLoad={() => this.forceUpdate()}
                // onLayout={() => setState({ initialRender: false })}
                // style={{ height: 35, width: 35 }}
              ></Image> */}
              <Text>{station.name}</Text>
              <Text>{station.available_bikes}</Text>
            </View>
          </Callout>
        </Marker>
      ))}
    </MapView>
  </View>;
};

export default Map;
