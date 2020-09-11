import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import SettingsPage from "./StackScreen";

export default function HomeScreen({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("StackScreen");
  };

  return (
    <View>
      <Text> Home Screen </Text>
      <Button title="Go to About" onPress={pressHandler} />
    </View>
  );
}
