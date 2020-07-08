import React, { useState } from "react";
import { View } from "react-native";
import { Button, Input, Icon, Image } from "react-native-elements";
import { isEmpty } from "lodash";
import * as firebase from "firebase";
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
      firebase
        .auth()
        .signInWithEmailAndPassword(formData.user, formData.password)
        .then(() => {
          setIsLoading(false);
          console.log("OK");
        })
        .catch(() => {
          setIsLoading(false);
          console.log("No login");
          toastRef.current.show("Email o contraseña incorrectos");
        });
      // const body: any = {
      //   grant_type: "password",
      //   username: formData.user,
      //   password: formData.password,
      // };
      // const formBody = [];
      // for (const key in body) {
      //   var encodedKey = encodeURIComponent(key);
      //   var encodedValue = encodeURIComponent(body[key]);
      //   formBody.push(encodedKey + "=" + encodedValue);
      // }
      // fetch("https://api.cirmedsa.net:44314/token", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/x-www-form-urlencoded",
      //   },
      //   body: formBody.join("&"),
      // })
      //   .then((response) => {
      //     console.log("OK");
      //     console.log(response);
      //     return response.json();
      //   }) // promise
      //   .then((json) => () => {
      //     console.log(`${TAG} > login > success > json`, json);
      //     setIsLoading(false);
      //   })
      //   .catch(() => {
      //     console.error(`${TAG} > login > error`);
      //     setIsLoading(false);
      //   });
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
