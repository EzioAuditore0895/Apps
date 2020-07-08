import React from "react";
import { Image } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import Benefits from "./benefits/Benefits";

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="benefits"
        component={Benefits}
        options={{
          title: "Beneficios",
          headerTitleStyle: { color: "#FFFCFE" },
          headerStyle: { backgroundColor: "#0C4B9C", height: 130 },
        }}
      />
    </Stack.Navigator>
  );
}
