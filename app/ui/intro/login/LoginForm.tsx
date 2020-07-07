import React, { useState } from "react";
import { View } from "react-native";
import { Button, Input, Icon, Image } from "react-native-elements";
import { isEmpty } from "lodash";
import * as firebase from "firebase";
import styles from "./loginForm.style";
import Loading from "../../Loading";

export default function LoginForm(props: any) {
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
