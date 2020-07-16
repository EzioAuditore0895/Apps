import React, { useState, useEffect } from "react";
// import styles from "./benefit-item.style";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styleItems from "./BenefitItem.style";

export default function BenefitItem(props: any) {
  const TAG = "BenefitItem";
  const { benefit, navigation } = props;
  const { id, imageUrl, title, description, discountRate } = benefit.item;
  console.log(`${TAG} > benefit`, benefit);

  const goBenefitDetail = () => {
    navigation.navigate("benefitsdetail", {
      id,
      title,
      imageUrl,
      description,
      discountRate,
    });
  };

  return (
    <TouchableOpacity onPress={goBenefitDetail}>
      <Image
        source={{ uri: benefit.item.imageUrl }}
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
