import React from "react";
import { Image } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "./dashboard/Dashboard";
import Benefits from "./benefits/Benefits";
import BenefitDetail from "./benefit-detail/BenefitDetail";
import BenefitCategory from "./benefit-categories/BenefitCategory";
import BenefitZone from "./benefit-zones/BenefitZone";

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
        // options={{
        //   title: "Beneficios",
        //   headerTitleStyle: { color: "#FFFCFE" },
        //   headerStyle: { backgroundColor: "#0C4B9C", height: 130 },
        // }}
      />
      <Stack.Screen
        name="benefitCategory"
        component={BenefitCategory}
        options={{
          title: "Categorias",
          headerTitleStyle: { color: "#FFFCFE" },
          headerStyle: { backgroundColor: "#0C4B9C", height: 100 },
        }}
      />
      <Stack.Screen
        name="benefitZone"
        component={BenefitZone}
        options={{
          title: "Elegir Zona",
          headerTitleStyle: { color: "#FFFCFE" },
          headerStyle: { height: 130, backgroundColor: "#0C5FBC" },
          headerTintColor: "#FFFCFE",
        }}
      />
      <Stack.Screen name="benefitsdetail" component={BenefitDetail} />
    </Stack.Navigator>
  );
}
