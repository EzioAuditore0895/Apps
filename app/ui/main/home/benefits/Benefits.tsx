import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { BenefitService } from "../../../../services/benefits/benefit.service";
import { Benefit } from "../../../../models/benefits/benefit.model";
import { BaseCallback } from "../../../../services/base.callback";
import { Button, Input, Icon } from "react-native-elements";
import * as firebase from "firebase";

export default function Benefits() {
  const TAG = "Benefits";
  const benefitService = new BenefitService();
  const [benefits, setBenefits] = useState([]);
  useEffect(() => {
    const callback = new BaseCallback<Benefit>();
    callback.onResults = (results: Benefit[]) => {
      console.log(`${TAG} > results`, results);
      setBenefits(results);
    };
    benefitService.getAll(callback);
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

const styles = StyleSheet.create({});
