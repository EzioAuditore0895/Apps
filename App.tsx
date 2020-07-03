import React from "react";
import { firebaseApp } from "./app/services/firebase/firebase.service";
import UiStackNavigator from "./app/ui/UiStackNavigator";

export default function App() {
  const firebase = firebaseApp;
  return <UiStackNavigator />;
}
