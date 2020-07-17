import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import * as firebase from "firebase";

export default function Profile() {
  return (
    <View style={{ padding: 40 }}>
      <Button
        title="Cerrar Sesión"
        onPress={() => {
          firebase.auth().signOut();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
