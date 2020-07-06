import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input, Icon, Image } from "react-native-elements";
import { isEmpty } from "lodash";
import * as firebase from "firebase";

export default function LoginForm(props: any) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(defaultFormValue);
  const { toastRef } = props;

  const onSubmit = () => {
    if (isEmpty(formData.user) || isEmpty(formData.password)) {
      // toastRef.current.show("Todos los campos son obligatorios");
      toastRef.current.show("hello world!");
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(formData.user, formData.password)
        .then(() => {
          console.log("OK");
        })
        .catch(() => {
          console.log("No login");
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
        placeholder="usuario"
        leftIcon={{ type: "font-awesome", name: "user-circle-o" }}
        containerStyle={styles.inputForm}
        onChange={(e) => onChange(e, "user")}
      ></Input>
      <Input
        placeholder="contraseña"
        containerStyle={styles.inputForm}
        secureTextEntry={showPassword ? false : true}
        leftIcon={{ type: "material", name: "lock" }}
        onChange={(e) => onChange(e, "password")}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
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
    </View>
  );
}

function defaultFormValue() {
  return {
    user: "",
    password: "",
  };
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  inputForm: {
    width: "100%",
    marginTop: 20,
  },
  btnContainerLogin: {
    marginTop: 20,
    width: "95%",
  },
  btnLogin: {
    backgroundColor: "#00a680",
  },
});
