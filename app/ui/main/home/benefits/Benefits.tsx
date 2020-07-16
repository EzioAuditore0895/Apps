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
import { useNavigation } from "@react-navigation/native";
import BenefistStyle from "./Benefits.style";

export default function Benefits(props: any) {
  const TAG = "Benefits";
  const benefitService = new BenefitService();
  const [benefits, setBenefits] = useState<Benefit[]>([]);
  const { route } = props;
  const { id, categoryName, name } = route.params;

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
      .getByZoneId(id)
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
      {size(benefits) > 0 ? (
        <FlatList
          data={benefits}
          renderItem={(benefit) => (
            <BenefitItem benefit={benefit} navigation={navigation} />
          )}
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
