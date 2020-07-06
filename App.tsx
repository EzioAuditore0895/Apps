import React from "react";
import { YellowBox } from "react-native";
import { firebaseApp } from "./app/services/firebase/firebase.service";
import UiStackNavigator from "./app/ui/UiStackNavigator";

YellowBox.ignoreWarnings(["Setting a timer"]);

export default function App() {
  const firebase = firebaseApp;
  return <UiStackNavigator />;
}
