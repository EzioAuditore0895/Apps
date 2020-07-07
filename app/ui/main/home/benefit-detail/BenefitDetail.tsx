import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { BenefitService } from "../../../../services/benefits/benefit.service";
import { Benefit } from "../../../../models/benefits/benefit.model";

export default function BenefitDetail(props: any) {
  const TAG = "BenefitDetail";
  const { benefit: Benefit } = props;
  const benefitService = new BenefitService();
  return (
    <View>
      <Text>BenefitDetail...</Text>
    </View>
  );
}
