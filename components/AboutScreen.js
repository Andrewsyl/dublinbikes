import React from "react";
import { Button, SafeAreaView, View, Text, CustomHeader } from "react-native";

export default function AboutPage({ navigation }) {
  const pressHander = () => {
    navigation.navigate("About");
  };

  return (
    <SafeAreaView>
      {/* <CustomHeader title="HII" navigation={navigation} /> */}
      <View>
        {/* {pressHander}
        <Text>About Page</Text>
        <Button title="Go back" onPress={pressHander}></Button> */}
      </View>
    </SafeAreaView>
  );
}
