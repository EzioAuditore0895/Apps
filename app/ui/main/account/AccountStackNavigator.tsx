import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "./profile/Profile";

const Stack = createStackNavigator();

export default function AccountStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{
          title: "Perfil",
          headerTitleStyle: { color: "#FFFCFE" },
          headerStyle: { height: 130, backgroundColor: "#0C5FBC" },
          headerTintColor: "#FFFCFE",
        }}
      />
    </Stack.Navigator>
  );
}
