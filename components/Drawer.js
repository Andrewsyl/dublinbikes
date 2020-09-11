import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { render } from "react-dom";
import React, { Component } from "react";
import HomeScreen from "./HomeScreen";
import AboutScreen from "./AboutScreen";
import StackScreen from "./StackScreen";
import Map from "./Map";
import { NavigationContainer } from "@react-navigation/native";
import AboutPage from "./AboutScreen";
import { View } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

export default class MyDrawer extends Component {
  render() {
    return (
      <Drawer.Navigator initialRouteName="Map">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Map" component={Map} />
      </Drawer.Navigator>
    );
  }
}
