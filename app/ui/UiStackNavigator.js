import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Initializing from "./initializing/Initializing";
import IntroStackNavigator from "./intro/IntroStackNavigator";
import MainBottomTabNavigator from "./main/MainBottomTabNavigator";

const Stack = createStackNavigator();

export default function UiStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Initializing" headerMode="none">
        <Stack.Screen name="Initializing" component={Initializing} />
        <Stack.Screen
          name="IntroStackNavigator"
          component={IntroStackNavigator}
        />
        <Stack.Screen
          name="MainBottomTabNavigator"
          component={MainBottomTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
