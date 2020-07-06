import React, { useRef } from "react";
import { View, ImageBackground, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LoginForm from "../../components/LoginForm";
import { Image } from "react-native-elements";

export default function Login() {
  const navigation = useNavigation();
  const toastRef = useRef();
  return (
    <ImageBackground
      source={require("../../../../assets/login/background_login.png")}
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <View></View>
        <View style={{ width: 350, height: 300 }}>
          <Image
            source={require("../../../../assets/login/cms_logo.png")}
            style={{ width: 70, height: 70 }}
          />
          <Image
            source={require("../../../../assets/login/Círculo_Médico_Salta.png")}
            style={{ width: 120, height: 100, marginBottom: 30 }}
          />
          <LoginForm></LoginForm>
        </View>
        <View
          style={{
            width: 0,
            height: 0,
          }}
        ></View>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },
  viewContainer: {
    marginRight: 40,
    marginLeft: 40,
  },
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  btnRegister: {
    color: "#00a680",
    fontWeight: "bold",
  },
  divider: {
    backgroundColor: "#00a680",
    margin: 40,
  },
});
