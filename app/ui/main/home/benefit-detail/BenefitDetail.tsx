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

const widthFont = Dimensions.get("window").width;

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

  //console.log("Props>>>>>", url);
  return (
    <View style={styles.parentView}>
      <View style={styles.childOne}>
        <Image
          source={{ uri: url }}
          style={{ width: screenWidth, height: screenHeigth }}
        />
      </View>
      <View style={styles.childTwo}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <Text style={styles.description}>{description}</Text>

        <Text style={styles.discountRate}>{discountRate}%</Text>
        <Text style={styles.discount}>Descuento</Text>
      </View>
      <View style={styles.childThree}>
        <Card containerStyle={{ backgroundColor: "#EEEEEE" }}>
          <View style={styles.dialogDescription}>
            <Text style={{ textAlign: "center" }}>
              Disfruta este descuento todos los días en cualquier de nuestros
              puntos de venta. Presentá tu codígo al momento de abonar junto con
              tu tarjeta de socio, y distfrutá automáticamente del Beneficio.
            </Text>

            <Text style={{ textAlign: "center" }}>
              VIGENTE HASTA EL 30/12/2020
            </Text>
          </View>
          <Button
            onPress={() => {
              setStateVisible(true);
            }}
            buttonStyle={{
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
      </View>
    </View>
  );
}

function fontSize(screenWidth: any) {
  if (screenWidth > 400) {
    return 30;
  } else if (screenWidth > 250) {
    return 20;
  } else {
    return 12;
  }
}

function fontSizeDiscountRate(screenWidth: any) {
  if (screenWidth > 400) {
    return 22;
  } else if (screenWidth > 250) {
    return 17;
  } else {
    return 7;
  }
}

function fontSizeDescription(screenWidth: any) {
  if (screenWidth > 400) {
    return 17;
  } else if (screenWidth > 250) {
    return 13;
  } else {
    return 10;
  }
}

const styles = StyleSheet.create({
  parentView: {
    flex: 1,
  },
  childOne: {
    flex: 2,
    paddingTop: fontSizeDescription(widthFont),
    paddingBottom: fontSizeDescription(widthFont),
    justifyContent: "center",
    //backgroundColor: "blue",
  },
  childTwo: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    paddingTop: fontSizeDescription(widthFont),
    //backgroundColor: "red",
  },
  childThree: {
    flex: 3,
    justifyContent: "center",
    paddingBottom: fontSizeDescription(widthFont),
    //backgroundColor: "green",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: fontSize(widthFont),
  },
  description: {
    textAlign: "center",
    fontSize: fontSizeDescription(widthFont),
    color: "gray",
  },
  dialogDescription: {
    marginBottom: fontSizeDescription(widthFont),
  },
  discount: {
    textAlign: "center",
    fontSize: fontSizeDescription(widthFont),
    color: "#2163C0",
  },
  discountRate: {
    textAlign: "center",
    fontSize: fontSizeDiscountRate(widthFont),
    color: "#2163C0",
    fontWeight: "bold",
  },
  code: {
    textAlign: "center",
    color: "#2163C0",
  },
  txtcode: {
    textAlign: "center",
    color: "#2163C0",
    fontWeight: "bold",
  },
});
