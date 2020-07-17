import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import HomeStackNavigator from "./home/HomeStackNavigator";
import AccountStackNavigator from "./account/AccountStackNavigator";
import styles from "../initializing/initializing.style";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const Tab = createBottomTabNavigator();

export default function MainBottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      tabBarOptions={{
        inactiveTintColor: "#A7A7A7",
        activeTintColor: "#FBFBFB",
        style: {
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          backgroundColor: "#1552A5",
          borderColor: "#fff",
          borderWidth: 1,
          position: "absolute",
          bottom: 0,
          width: width,
          zIndex: 8,
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => screenOptions(route, color),
      })}
    >
      <Tab.Screen
        name="home"
        component={HomeStackNavigator}
        options={{ title: "Inicio" }}
      />
      <Tab.Screen
        name="account"
        component={AccountStackNavigator}
        options={{ title: "Cuenta" }}
      />
    </Tab.Navigator>
  );
}

function screenOptions(route: any, color: any) {
  let iconName;
  switch (route.name) {
    case "home":
      iconName = "home";
      break;
    case "account":
      iconName = "account";
      break;
    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}
