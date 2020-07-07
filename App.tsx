import React from "react";
import { firebaseApp } from "./app/services/firebase/firebase.service";
import UiStackNavigator from "./app/ui/UiStackNavigator";
import { YellowBox } from "react-native";

YellowBox.ignoreWarnings([
  "Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`",
]);

export default function App() {
  const firebase = firebaseApp;
  return <UiStackNavigator />;
}
