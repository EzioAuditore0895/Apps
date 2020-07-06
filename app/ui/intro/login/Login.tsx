import React from "react";
import { View, Text } from "react-native";
import styles from "./login.style";
import { Button } from "react-native-elements";
import { useNavigation, StackActions } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Login...</Text>
      <Button
        title="Ir a la página principal"
        onPress={() => {
          navigation.dispatch(StackActions.replace("MainBottomTabNavigator"));
        }}
      />
    </View>
  );
}
