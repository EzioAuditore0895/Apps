import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import styles from "./benefit-item.style";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function BenefitItem(props: any) {
  const TAG = "BenefitItem";
  const { benefit, navigation } = props;
  const { url, title, description, discountRate } = benefit.item;
  console.log(`${TAG} > benefit`, benefit);

  const goBenefitDetail = () => {
    navigation.navigate("benefitsdetail", {
      title,
      url,
      description,
      discountRate,
    });
  };

  return (
    <TouchableOpacity onPress={goBenefitDetail}>
      <Image
        source={{ uri: benefit.item.url }}
        style={{ height: 150, borderRadius: 10 }}
      />
      <View style={{ flex: 1, flexDirection: "row", paddingHorizontal: 25 }}>
        <Text style={{ fontSize: 48, color: "#2058A7" }}>
          {benefit.item.discountRate}%
        </Text>
        <View style={{ justifyContent: "center", marginLeft: 12 }}>
          <Text>{benefit.item.title}</Text>
          <Text>{benefit.item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
