import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { BenefitService } from "../../../../services/benefits/benefit.service";
import { Benefit } from "../../../../models/benefits/benefit.model";
import { size } from "lodash";
import BenefitItem from "./BenefitItem";
import styles from "../../../initializing/initializing.style";
import BenefistStyle from "./benefits.style";

export default function Benefits() {
  const TAG = "Benefits";
  const benefitService = new BenefitService();
  const [benefits, setBenefits] = useState<Benefit[]>([]);
  useEffect(() => {
    benefitService
      .getAll()
      .then((results) => {
        console.log(`${TAG} > benefitService > getAll > results`, results);
        setBenefits(results);
        console.log(`${TAG} > benefitService > getAll > benefits`, benefits);
      })
      .catch(() => {
        console.error(`${TAG} > benefitService > getAll > error`);
      });
  }, []);

  return (
    <View>
      {size(benefits) > 0 ? (
        <FlatList
          data={benefits}
          renderItem={(benefit) => <BenefitItem benefit={benefit} />}
          keyExtractor={(item, index) => index.toString()}
          style={BenefistStyle.listStyle}
          contentContainerStyle={BenefistStyle.listConteinerStyle}
        />
      ) : (
        <View style={BenefistStyle.loading}>
          <ActivityIndicator size="large" color="#1552A5" />
          <Text>Cargando beneficios...</Text>
        </View>
      )}
    </View>
  );
}
