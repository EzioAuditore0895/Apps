import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import HomeStackNavigator from "./home/HomeStackNavigator";
import AccountStackNavigator from "./account/AccountStackNavigator";

const Tab = createBottomTabNavigator();

export default function MainBottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      tabBarOptions={{
        inactiveTintColor: "#646464",
        activeTintColor: "#00a680",
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

function screenOptions(route, color) {
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
