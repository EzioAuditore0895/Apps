import React from "react";
import { Image } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "./dashboard/Dashboard";
import Benefits from "./benefits/Benefits";
import BenefitDetail from "./benefit-detail/BenefitDetail";

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="benefits"
        component={Benefits}
        options={{
          title: "Beneficios",
          headerTitleStyle: { color: "#FFFCFE" },
          headerStyle: { backgroundColor: "#0C4B9C", height: 130 },
        }}
      />
      <Stack.Screen name="benefitsdetail" component={BenefitDetail} />
    </Stack.Navigator>
  );
}
