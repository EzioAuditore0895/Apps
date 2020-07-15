import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styleItems from "./benefit-item-category.style";

export default function BenefitItemCategory(props: any) {
  const TAG = "BenefitItem";
  const { benefitCategory, navigation } = props;
  const { imageUrl, name, description } = benefitCategory.item;
  console.log(`${TAG} > benefit`, benefitCategory);

  const goZone = () => {
    navigation.navigate("benefitZone", {
      name,
      imageUrl,
      description,
    });
  };

  return (
    <TouchableOpacity onPress={goZone}>
      <Image
        source={{ uri: benefitCategory.item.imageUrl }}
        style={styleItems.benefitImage}
      />
      {/* <View style={styleItems.benefitView}>
        <View style={styleItems.benefitV}>
          <Text style={styleItems.title}>{benefitCategory.item.name}</Text>
          <Text style={styleItems.description}>
            {benefitCategory.item.description}
          </Text>
        </View>
      </View> */}
    </TouchableOpacity>
  );
}
