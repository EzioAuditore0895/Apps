import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Benefits from "./benefits/Benefits";

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="benefits"
        component={Benefits}
        options={{ title: "Beneficios" }}
      />
    </Stack.Navigator>
  );
}
