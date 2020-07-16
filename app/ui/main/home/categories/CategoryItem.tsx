import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Styles from "./CategoryItem.style";

export default function CategoryItem(props: any) {
  const TAG = "CategoryItem";
  const { category, navigation } = props;
  const { id, name, description, imageUrl } = category.item;
  console.log(`${TAG} > category`, category);

  const goZone = () => {
    navigation.navigate("zones", {
      id,
      name,
      description,
      imageUrl,
    });
  };

  return (
    <TouchableOpacity onPress={goZone}>
      <Image
        source={{ uri: category.item.imageUrl }}
        style={Styles.benefitImage}
      />
      {/* <View style={styleItems.benefitView}>
        <View style={styleItems.benefitV}>
          <Text style={styleItems.title}>{category.item.name}</Text>
          <Text style={styleItems.description}>
            {category.item.description}
          </Text>
        </View>
      </View> */}
    </TouchableOpacity>
  );
}
