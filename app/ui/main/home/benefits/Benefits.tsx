import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { BenefitService } from "../../../../services/benefits/benefit.service";

export default function Benefits() {
  const TAG = "Benefits";
  const benefitService = new BenefitService();
  const [benefits, setBenefits] = useState([]);
  useEffect(() => {
    const results = benefitService.getAll();
    console.log(`${TAG} > results`, results);
    setBenefits(results);
    console.log(`${TAG} > benefits`, benefits);
  }, []);
  return (
    <View>
      <Text>Benefits...</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
