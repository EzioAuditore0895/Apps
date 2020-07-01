import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./login/Login";

const Stack = createStackNavigator();

export default function IntroStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
