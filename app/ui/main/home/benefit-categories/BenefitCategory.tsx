import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { size } from "lodash";
import { useNavigation } from "@react-navigation/native";
import BenefitCategoryStyle from "./benefitCategory.style";
import BenefitItemCategory from "./BenefitItemCategory";
import { BenefitsCategory } from "../../../../models/benefits/benefitCategory.model";
import { BenefitCategoryService } from "../../../../services/benefits/benefitCategory.service";

export default function BenefitCategory() {
  const TAG = "BenefitCategory";
  const benefitCategoryService = new BenefitCategoryService();
  const [benefitCategory, setBenefits] = useState<BenefitsCategory[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    benefitCategoryService
      .getAll()
      .then((results) => {
        console.log(
          `${TAG} > benefitService > getAll > Flavio > results`,
          results
        );
        setBenefits(results);
        console.log(
          `${TAG} > benefitService > getAll > Flavio > benefits`,
          benefitCategory
        );
      })
      .catch(() => {
        console.error(`${TAG} > benefitService > getAll > error`);
      });
  }, []);

  return (
    <View>
      {size(benefitCategory) > 0 ? (
        <FlatList
          data={benefitCategory}
          renderItem={(benefitCategory) => (
            <BenefitItemCategory
              benefitCategory={benefitCategory}
              navigation={navigation}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          style={BenefitCategoryStyle.listStyle}
          contentContainerStyle={BenefitCategoryStyle.listConteinerStyle}
        />
      ) : (
        <View style={BenefitCategoryStyle.loading}>
          <ActivityIndicator size="large" />
          <Text>Cargando categorias de beneficios...</Text>
        </View>
      )}
    </View>
  );
}
