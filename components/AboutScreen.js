import React from "react";
import { Button, SafeAreaView, View, Text, CustomHeader } from "react-native";

export default function AboutPage({ navigation }) {
  return (
    // <SafeAreaView>
    //   {/* <CustomHeader title="About" navigation={navigation} /> */}
    <View>
      <Button
        title="Hit me"
        onPress={() => navigation.navigate("Hi", { screen: "About" })}
      ></Button>
    </View>
  );
}
