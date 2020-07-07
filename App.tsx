import React from "react";
import { YellowBox } from "react-native";
import { firebaseApp } from "./app/services/firebase/firebase.service";
import UiStackNavigator from "./app/ui/UiStackNavigator";

YellowBox.ignoreWarnings([
  "Setting a timer",
  "Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`",
]);

export default function App() {
  const firebase = firebaseApp;
  return <UiStackNavigator />;
}
