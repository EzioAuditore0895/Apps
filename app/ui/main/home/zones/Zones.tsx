import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { size } from "lodash";
import { useNavigation } from "@react-navigation/native";
import { ZoneService } from "../../../../services/zones/zone.service";
import { Zone } from "../../../../models/zones/zone.model";
import Styles from "./Zones.style";
import ZoneItem from "./ZoneItem";

export default function Zones(props: any) {
  const TAG = "Zones";
  const zoneService = new ZoneService();
  const { route } = props;
  const { id, name } = route.params;
  const [zones, setZones] = useState<Zone[] | null>(null);

  const navigation = useNavigation();

  useEffect(() => {
    zoneService
      .getByCategoryId(id)
      .then((results) => {
        console.log(`${TAG} > zoneService > getAll > results`, results);
        setZones(results);
        console.log(`${TAG} > zoneService > getAll > zones`, zones);
      })
      .catch(() => {
        console.error(`${TAG} > zoneService > getAll > error`);
      });
  }, []);

  return (
    <View>
      {zones && size(zones) > 0 ? (
        <FlatList
          data={zones}
          renderItem={(zone) => (
            <ZoneItem
              categoryId={id}
              categoryName={name}
              zone={zone}
              navigation={navigation}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          style={Styles.listStyle}
          contentContainerStyle={Styles.listContainerStyle}
        />
      ) : zones == null ? (
        <View style={Styles.loading}>
          <ActivityIndicator size="large" />
          <Text>Cargando zonas...</Text>
        </View>
      ) : (
        <View style={Styles.loading}>
          <Text>No se encontraron resultados...</Text>
        </View>
      )}
    </View>
  );
}
