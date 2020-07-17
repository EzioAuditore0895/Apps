import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Carousel from "../dashboard/DashboardCarousel";
import { Divider, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
//import styles from "./Dashboard.style";

const { height, width } = Dimensions.get("window");

var box_count = 3;
var box_height = height / box_count;

//console.log(height);

/**  */

export default function Dashboard() {
  const navigation = useNavigation();
  const screenWidth = width;

  const image =
    "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg";

  return (
    <ImageBackground
      source={require("../../../../../assets/home/background_home.png")}
      style={{ flex: 1 }}
    >
      <View style={styles.viewBody}>
        <View style={styles.childOne}>
          <View style={styles.viewButtons}>
            <TouchableOpacity style={styles.buttons}>
              <Image
                source={require("../../../../../assets/home/mi_agenda.png")}
                style={styles.images}
              />
              <Text style={styles.textTitleOne}>Mi</Text>
              <Text style={styles.textTitleTwo}>Agenda</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttons}>
              <Image
                source={require("../../../../../assets/home/mi_consultorio.png")}
                style={styles.images}
              />
              <Text style={styles.textTitleOne}>Mis</Text>
              <Text style={styles.textTitleTwo}>Consultorios</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.viewButtons}>
            <TouchableOpacity style={styles.buttons}>
              <Image
                source={require("../../../../../assets/home/mi_profesion.png")}
                style={styles.images}
              />
              <Text style={styles.textTitleOne}>Mis</Text>
              <Text style={styles.textTitleTwo}>Profesiones</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => navigation.navigate("categories")}
            >
              <Image
                source={require("../../../../../assets/home/mi_beneficio.png")}
                style={styles.images}
              />
              <Text style={styles.textTitleOne}>Mis</Text>
              <Text style={styles.textTitleTwo}>Beneficios</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Divider style={styles.divider} />
        <Text
          style={{ marginLeft: 30, color: "#fff", fontSize: 18, marginTop: 20 }}
        >
          Beneficios exclusivos para socios
        </Text>
        <View style={styles.childTwo}>
          <View style={styles.carousel}>
            <Image
              source={require("../../../../../assets/banner.png")}
              style={{ height: box_height, width: screenWidth }}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

function marginScreenButtons(screenWidth: any) {
  if (screenWidth > 400) {
    return 14;
  } else if (screenWidth > 250) {
    return 8;
  } else {
    return 5;
  }
}

function marginScreenDivider(screenWidth: any) {
  if (screenWidth > 400) {
    return 40;
  } else if (screenWidth > 250) {
    return 25;
  } else {
    return 10;
  }
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

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
  },
  childOne: {
    flex: 2.5,
    justifyContent: "center",
    marginTop: marginScreenDivider(width),
    //backgroundColor: "green",
  },
  childTwo: {
    flex: 1.8,
    //backgroundColor: "blue",
  },
  textTitleOne: {
    textAlign: "center",
    color: "#329BF8",
  },
  textTitleTwo: {
    textAlign: "center",
    color: "white",
  },
  divider: {
    backgroundColor: "#2884DE",
    marginRight: 40,
    marginLeft: 40,
    marginTop: marginScreenButtons(width),
  },
  description: {
    color: "#2884DE",
  },
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: fontSize(width),
  },
  images: {
    width: 60,
    height: 60,
  },
  buttons: {
    width: "40%",
    flexDirection: "column",
    backgroundColor: "#0F70CE",
    justifyContent: "center",
    alignItems: "center",
    padding: marginScreenButtons(width),
    paddingBottom: marginScreenButtons(width),
    borderRadius: 35,
    margin: 8,
  },
  viewButtons: {
    height: "50%",
    flexDirection: "row",
    justifyContent: "center",
  },
  carousel: {
    position: "absolute",
    bottom: 0,
  },
  text: {
    marginLeft: 30,
    marginBottom: marginScreenButtons(width),
  },
});
