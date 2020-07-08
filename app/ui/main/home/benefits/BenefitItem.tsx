import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styleItems from "./benefit-item.style";
import styles from "../../../initializing/initializing.style";

export default function BenefitItem(props: any) {
  const TAG = "BenefitItem";
  const { benefit } = props;
  console.log(`${TAG} > benefit`, benefit);

  const goBeneficio = () => {
    console.log("goooo");
  };

  return (
    <TouchableOpacity onPress={goBeneficio}>
      <Image
        source={{ uri: benefit.item.url }}
        style={styleItems.benefitImage}
      />
      <View style={styleItems.benefitView}>
        <Text style={styleItems.benefitText}>{benefit.item.discountRate}%</Text>
        <View style={styleItems.benefitV}>
          <Text style={styleItems.title}>{benefit.item.title}</Text>
          <Text style={styleItems.description}>{benefit.item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
