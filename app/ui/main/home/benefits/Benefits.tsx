import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { BenefitService } from "../../../../services/benefits/benefit.service";
import { Benefit } from "../../../../models/benefits/benefit.model";
import { size } from "lodash";
import BenefitItem from "./BenefitItem";
import styles from "../../../initializing/initializing.style";

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
          style={{ padding: 12 }}
        />
      ) : (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
          <Text>Cargando beneficios...</Text>
        </View>
      )}
    </View>
  );
}
