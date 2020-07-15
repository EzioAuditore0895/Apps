import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styleItems from "./benefit-item-zone.style";
import { Card } from "react-native-elements";

export default function BenefitItemZone(props: any) {
  const TAG = "BenefitItemZone";
  const { benefitZone, navigation, categoryName } = props;
  const { url, name, description } = benefitZone.item;
  console.log(`${TAG} > benefit`, benefitZone);

  const goBenefits = () => {
    navigation.navigate("benefits", {
      name,
      url,
      description,
      categoryName,
    });
  };

  return (
    <TouchableOpacity onPress={goBenefits}>
      <Card style={styleItems.benefitView}>
        <View style={styleItems.benefitV}>
          <Text style={styleItems.title}>{benefitZone.item.name}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
}
