import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AboutPage from "./AboutScreen";

const Stack = createStackNavigator();

export default function Settings({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingsPage"
        component={AboutPage}
        options={{
          title: "CPU Home122",
        }}
      />
    </Stack.Navigator>
  );
}
