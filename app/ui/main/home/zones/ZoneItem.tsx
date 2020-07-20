import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Styles from "./ZoneItem.style";
import { Card } from "react-native-elements";

export default function ZoneItem(props: any) {
  const TAG = "ZoneItem";
  const { zone, navigation, categoryId, categoryName } = props;
  const { id, name, description, imageUrl } = zone.item;
  console.log(`${TAG} > zone`, zone);

  const goBenefits = () => {
    navigation.navigate("benefits", {
      id,
      name,
      description,
      categoryId,
      categoryName,
      imageUrl,
    });
  };

  return (
    <TouchableOpacity onPress={goBenefits}>
      <Card style={Styles.benefitView}>
        <View style={Styles.benefitV}>
          <Text style={Styles.title}>{zone.item.name}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
}
