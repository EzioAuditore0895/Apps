import React, { useRef } from "react";
import { View, ImageBackground, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LoginForm from "./LoginForm";
import { Image } from "react-native-elements";
import Toast from "react-native-easy-toast";
import styles from "./login.style";

export default function Login() {
  const navigation = useNavigation();
  const toastRef = useRef();
  return (
    <ImageBackground
      source={require("../../../../assets/login/background_login.png")}
      style={styles.imageBackground}
    >
      <View style={styles.viewBody}>
        <View style={styles.viewComponents}>
          <View style={styles.viewLogos}>
            <Image
              source={require("../../../../assets/login/cms_logo.png")}
              style={styles.logoImg}
              containerStyle={styles.logoContainer}
            />
            <Image
              source={require("../../../../assets/login/Círculo_Médico_Salta.png")}
              style={styles.logoWords}
            />
          </View>
          <LoginForm toastRef={toastRef} />
          <Toast ref={toastRef} position="center" opacity={0.9} />
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
