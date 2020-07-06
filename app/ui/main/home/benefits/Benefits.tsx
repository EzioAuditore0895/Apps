import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { BenefitService } from "../../../../services/benefits/benefit.service";
import { Benefit } from "../../../../models/benefits/benefit.model";
import { BaseCallback } from "../../../../services/base.callback";

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
  return (
    <View>
      <Text>Benefits...</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
