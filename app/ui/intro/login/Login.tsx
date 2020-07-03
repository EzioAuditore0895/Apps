import React, { useRef } from "react";
import { View, Text } from "react-native";
import styles from "./login.style";
import { Button } from "react-native-elements";
import { useNavigation, StackActions } from "@react-navigation/native";
import Toast from "react-native-easy-toast";

export default function Login() {
  const toastRef = useRef();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Login...</Text>
      <Button
        title="Ir a la página principal"
        onPress={() => {
          // navigation.dispatch(StackActions.replace("MainBottomTabNavigator"));
          toastRef.current.show("Mensaje.");
        }}
      />
      <Toast ref={toastRef} position="center" opacity={0.9} />
    </View>
  );
}
