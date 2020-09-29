import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { render } from "react-dom";
import React, { Component } from "react";
import AboutScreen from "./AboutScreen";
import Map from "./Map";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
import Favorites from "./Favorites";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-navigation";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const Tabs = () => (
  <Tab.Navigator initialRouteName="Home">
    <Tab.Screen name="Home" component={Map} />
    <Tab.Screen name="Favorites" component={Favorites} />
  </Tab.Navigator>
);

const StackScreen = ({ navigation }) => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerStyle: { backgroundColor: "papayawhip" } }}
  >
    <Stack.Screen
      name="Home"
      component={Tabs}
      options={{
        title: "Dublin Bikes",
        headerLeft: () => (
          <Ionicons.Button
            style={{ left: 15 }}
            name="ios-menu"
            backgroundColor="papayawhip"
            color="black"
            width="100%"
            size={25}
            onPress={() => navigation.openDrawer()}
          ></Ionicons.Button>
        ),
      }}
    />
  </Stack.Navigator>
);

export default class MyDrawer extends Component {
  render() {
    return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={StackScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
    );
  }
}
