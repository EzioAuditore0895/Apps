import React, { useState } from "react";
import { View } from "react-native";
import { Button, Input, Icon, Image } from "react-native-elements";
import { isEmpty } from "lodash";
import * as firebase from "firebase";
import qs from "qs";
import axios from "axios";
import styles from "./loginForm.style";
import Loading from "../../Loading";

export default function LoginForm(props: any) {
  const TAG = "LoginForm";
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(defaultFormValue);
  const [isLoading, setIsLoading] = useState(false);
  const { toastRef } = props;

  const onSubmit = () => {
    if (isEmpty(formData.user) || isEmpty(formData.password)) {
      toastRef.current.show("Todos los campos son obligatorios");
    } else {
      setIsLoading(true);
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
      axios
        .post(
          "https://api.cirmedsa.net:44314/token",
          qs.stringify({
            grant_type: "password",
            username: formData.user,
            password: formData.password,
          }),
          config
        )
        .then((response: any) => {
          console.log(`${TAG} > login > success > response`, response.status);
          console.log(`${TAG} > login > success > response`, response.data);
          firebase
            .auth()
            .signInWithEmailAndPassword("sa@likechuck.com", "Zg1ww8QDNnL8Q9gj")
            .then(() => {
              setIsLoading(false);
              console.log(`${TAG} > login > firebase > success`);
            })
            .catch(() => {
              setIsLoading(false);
              console.log(`${TAG} > login > firebase > error`);
              toastRef.current.show("Usuario o contraseña incorrectos.");
            });
        })
        .catch((error: any) => {
          console.log(`${TAG} > login > error`, error);
          setIsLoading(false);
          toastRef.current.show("Usuario o contraseña incorrectos.");
        });
    }
  };

  const onChange = (e: any, type: any) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
    // console.log('e', e.nativeEvent.text)
    // console.log('type', type)
  };

  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Usuario"
        leftIcon={{
          type: "font-awesome",
          name: "user-circle-o",
          color: "#1B4065",
        }}
        containerStyle={styles.inputForm}
        inputContainerStyle={styles.inputContainer}
        onChange={(e) => onChange(e, "user")}
        leftIconContainerStyle={styles.iconLeft}
        placeholderTextColor="#1B4065"
        autoCapitalize="none"
      ></Input>
      <Input
        placeholder="Contraseña"
        containerStyle={styles.inputForm}
        inputContainerStyle={styles.inputContainer}
        secureTextEntry={showPassword ? false : true}
        leftIcon={{ type: "material", name: "lock", color: "#1B4065" }}
        onChange={(e) => onChange(e, "password")}
        leftIconContainerStyle={styles.iconLeft}
        placeholderTextColor="#1B4065"
        autoCapitalize="none"
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            color="#1B4065"
            onPress={() => setShowPassword(!showPassword)}
          ></Icon>
        }
      ></Input>
      <Button
        title="ENTRAR"
        containerStyle={styles.btnContainerLogin}
        buttonStyle={styles.btnLogin}
        onPress={onSubmit}
      ></Button>
      <Loading isVisible={isLoading} text="Iniciando sesión" />
    </View>
  );
}

function defaultFormValue() {
  return {
    user: "",
    password: "",
  };
}
