import React, { useState, useEffect } from "react";
import { View, Text, Dimensions } from "react-native";
import { BenefitService } from "../../../../services/benefits/benefit.service";
import { Benefit } from "../../../../models/benefits/benefit.model";
import { StyleSheet } from "react-native";
import { Image, Card, Button, Icon } from "react-native-elements";
import Dialog, {
  DialogContent,
  DialogFooter,
  DialogButton,
} from "react-native-popup-dialog";
import { ScrollView } from "react-native-gesture-handler";

export default function BenefitDetail(props: any) {
  const TAG = "BenefitDetail";
  const { navigation, route } = props;
  const { url, title, description, discountRate } = route.params;
  const benefitService = new BenefitService();
  const screenWidth = Dimensions.get("window").width;
  const heigth = Dimensions.get("window").height / 4;
  const screenHeigth = Dimensions.get("window").height / 4;
  navigation.setOptions({ title: title });

  const [stateVisible, setStateVisible] = useState(false);

  console.log("Props>>>>>", url);
  return (
    <ScrollView style={{ width: screenWidth, height: heigth }}>
      <Image
        source={{ uri: url }}
        style={{ width: screenWidth, height: screenHeigth }}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      <Text style={styles.discountRate}>{discountRate}%</Text>
      <Text style={styles.discount}>Descuento</Text>

      <Card containerStyle={{ backgroundColor: "#EEEEEE" }}>
        <Text style={{ marginBottom: 10, padding: 20, textAlign: "center" }}>
          Disfruta este descuento todos los días en cualquier de nuestros puntos
          de venta. Presentá tu codígo al momento de abonar junto con tu tarjeta
          de socio, y distfrutá automáticamente del Beneficio.
        </Text>
        <Text style={{ marginBottom: 10, padding: 20, textAlign: "center" }}>
          VIGENTE HASTA EL 30/12/2020
        </Text>
        <Button
          onPress={() => {
            setStateVisible(true);
          }}
          buttonStyle={{
            borderRadius: 20,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 10,
            backgroundColor: "#1551A5",
          }}
          title="QUIERO MI BENEFICIO"
        />
      </Card>
      <Dialog
        dialogStyle={{ padding: 20 }}
        visible={stateVisible}
        onTouchOutside={() => {
          setStateVisible(false);
        }}
        footer={
          <DialogFooter>
            <DialogButton
              text="OK"
              onPress={() => {
                setStateVisible(false);
              }}
            />
          </DialogFooter>
        }
      >
        <DialogContent>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.code}>CM2400031</Text>
          <Text style={styles.txtcode}>!Este es tu código!</Text>
          <Text style={styles.description}>
            Presentalo en caja antes de pagar
          </Text>
          <Text style={styles.description}>para obtener el descuento</Text>
        </DialogContent>
      </Dialog>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    paddingTop: 10,
    fontWeight: "bold",
  },
  description: {
    textAlign: "center",
    fontSize: 15,
    color: "gray",
  },
  discount: {
    textAlign: "center",
    fontSize: 15,
    color: "#2163C0",
  },
  discountRate: {
    textAlign: "center",
    paddingTop: 15,
    color: "#2163C0",
    fontSize: 50,
    fontWeight: "bold",
  },
  code: {
    textAlign: "center",
    color: "#2163C0",
    fontSize: 35,
    padding: 10,
  },
  txtcode: {
    textAlign: "center",
    color: "#2163C0",
    fontWeight: "bold",
  },
});
