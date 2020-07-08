import React, { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styles from "./initializing.style";
import { useNavigation, StackActions } from "@react-navigation/native";
import * as firebase from "firebase";

export default function Initializing() {
  const TAG = "Initializing";
  const navigation = useNavigation();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(`${TAG} > firebase > user`, user);
      if (user) {
        navigation.dispatch(StackActions.replace("MainBottomTabNavigator"));
      } else {
        navigation.dispatch(StackActions.replace("IntroStackNavigator"));
      }
    });
  }, []);
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#fff" />
      <Text style={{ color: "#fff", fontSize: 18 }}>Iniciando...</Text>
    </View>
  );
}
