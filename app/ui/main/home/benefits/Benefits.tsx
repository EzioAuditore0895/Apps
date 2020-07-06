import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { BenefitService } from "../../../../services/benefits/benefit.service";
import { Benefit } from "../../../../models/benefits/benefit.model";
import { Button, Input, Icon } from "react-native-elements";
import * as firebase from "firebase";

export default function Benefits() {
  const TAG = "Benefits";
  const benefitService = new BenefitService();
  const [benefits, setBenefits] = useState<Benefit[]>([]);
  useEffect(() => {
    benefitService
      .getAll()
      .then((results) => {
        console.log(`${TAG} > benefitService > getAll > results`, results);
        setBenefits(results);
        console.log(`${TAG} > benefitService > getAll > benefits`, benefits);
      })
      .catch(() => {
        console.error(`${TAG} > benefitService > getAll > error`);
      });
  }, []);

  const onSubmit = () => {
    firebase.auth().signOut();
  };

  return (
    <View>
      <Text>Benefits...</Text>
      <Button title="LogOut" onPress={onSubmit}></Button>
    </View>
  );
}
