import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "./dashboard/Dashboard";

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
