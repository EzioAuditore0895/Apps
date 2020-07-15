import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { size } from "lodash";
import { useNavigation } from "@react-navigation/native";
import BenefitZoneStyle from "./benefitZone.style";
import BenefitItemZone from "./BenefitItemZone";
import { BenefitZoneService } from "../../../../services/benefits/benefitZone.service";
import { BenefitsZone } from "../../../../models/benefits/benefitZone.model";

export default function BenefitZone(props: any) {
  const TAG = "BenefitZone";
  const benefitZoneService = new BenefitZoneService();
  const { route } = props;
  const { name } = route.params;
  const [benefitZone, setBenefits] = useState<BenefitsZone[]>([]);

  const navigation = useNavigation();

  useEffect(() => {
    benefitZoneService
      .getAll()
      .then((results) => {
        console.log(`${TAG} > benefitService > getAll > results`, results);
        setBenefits(results);
        console.log(
          `${TAG} > benefitService > getAll > benefitZone`,
          benefitZone
        );
      })
      .catch(() => {
        console.error(`${TAG} > benefitService > getAll > error`);
      });
  }, []);

  return (
    <View>
      {size(benefitZone) > 0 ? (
        <FlatList
          data={benefitZone}
          renderItem={(benefitZone) => (
            <BenefitItemZone
              categoryName={name}
              benefitZone={benefitZone}
              navigation={navigation}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          style={BenefitZoneStyle.listStyle}
          contentContainerStyle={BenefitZoneStyle.listConteinerStyle}
        />
      ) : (
        <View style={BenefitZoneStyle.loading}>
          <ActivityIndicator size="large" />
          <Text>Cargando zonas...</Text>
        </View>
      )}
    </View>
  );
}
