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
import { useNavigation } from "@react-navigation/native";
import Styles from "./Benefits.style";

export default function Benefits(props: any) {
  const TAG = "Benefits";
  const benefitService = new BenefitService();
  const [benefits, setBenefits] = useState<Benefit[] | null>(null);
  const { route } = props;
  const { id, categoryId, categoryName, name } = route.params;

  const navigation = useNavigation();

  navigation.setOptions({
    headerTitle: (props) => <LogoTitle {...props} />,
    headerTitleStyle: { color: "#FFFCFE" },
    headerStyle: { backgroundColor: "#0C4B9C", height: 100 },
  });

  function LogoTitle() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ color: "white", fontSize: 15 }}>Mis beneficios</Text>
        <Text style={{ color: "white", fontSize: 15 }}>
          {categoryName} - {name}
        </Text>
      </View>
    );
  }

  useEffect(() => {
    benefitService
      .getByCategoryIdAndZoneId(categoryId, id)
      .then((results) => {
        console.log(`${TAG} > benefitService > getByZoneId > results`, results);
        setBenefits(results);
        console.log(
          `${TAG} > benefitService > getByZoneId > benefits`,
          benefits
        );
      })
      .catch(() => {
        console.error(`${TAG} > benefitService > getByZoneId > error`);
      });
  }, []);

  return (
    <View>
      {benefits && size(benefits) > 0 ? (
        <FlatList
          data={benefits}
          renderItem={(benefit) => (
            <BenefitItem benefit={benefit} navigation={navigation} />
          )}
          keyExtractor={(item, index) => index.toString()}
          style={Styles.listStyle}
          contentContainerStyle={Styles.listContainerStyle}
        />
      ) : benefits == null ? (
        <View style={Styles.loading}>
          <ActivityIndicator size="large" color="#004A9C" />
          <Text>Cargando beneficios...</Text>
        </View>
      ) : (
        <View style={Styles.loading}>
          <Text>No se encontraron resultados...</Text>
        </View>
      )}
    </View>
  );
}
