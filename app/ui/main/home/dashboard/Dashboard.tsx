import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import Carousel from "../dashboard/DashboardCarousel";
import { Divider } from "react-native-elements";

export default function Dashboard() {
  const screenWidth = Dimensions.get("window").width;
  const images = [
    "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
  ];
  console.log("Tamaño", screenWidth);
  return (
    <ImageBackground
      source={require("../../../../../assets/home/background_home.png")}
      style={{ flex: 1 }}
    >
      <View style={styles.viewBody}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 40,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              backgroundColor: "#0F70CE",
              justifyContent: "center",
              paddingLeft: 50,
              borderRadius: 20,
              paddingRight: 50,
              paddingBottom: 5,
              paddingTop: 5,
              marginRight: 20,
            }}
          >
            <Image
              source={require("../../../../../assets/home/mi_agenda.png")}
              style={{ width: 70, height: 70 }}
            />
            <Text style={{ textAlign: "center", color: "#329BF8" }}>Mi</Text>
            <Text style={{ textAlign: "center", color: "white" }}>Agenda</Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              backgroundColor: "#0F70CE",
              justifyContent: "center",
              paddingLeft: 50,
              borderRadius: 20,
              paddingRight: 50,
              paddingBottom: 5,
              paddingTop: 5,
            }}
          >
            <Image
              source={require("../../../../../assets/home/mi_consultorio.png")}
              style={{ width: 70, height: 70 }}
            />
            <Text style={{ textAlign: "center", color: "#329BF8" }}>Mis</Text>
            <Text style={{ textAlign: "center", fontSize: 12, color: "white" }}>
              Consultorios
            </Text>
          </View>
        </View>
        <View
          style={{ flexDirection: "row", justifyContent: "center", margin: 20 }}
        >
          <View
            style={{
              flexDirection: "column",
              backgroundColor: "#0F70CE",
              justifyContent: "center",
              paddingLeft: 50,
              borderRadius: 20,
              paddingRight: 50,
              paddingBottom: 5,
              paddingTop: 5,
              marginRight: 20,
            }}
          >
            <Image
              source={require("../../../../../assets/home/mi_profesion.png")}
              style={{ width: 70, height: 70 }}
            />
            <Text style={{ textAlign: "center", color: "#329BF8" }}>Mis</Text>
            <Text style={{ textAlign: "center", color: "white" }}>
              Profesiones
            </Text>
          </View>

          <View
            style={{
              flexDirection: "column",
              backgroundColor: "#0F70CE",
              justifyContent: "center",
              paddingLeft: 50,
              borderRadius: 20,
              paddingRight: 50,
              paddingBottom: 5,
              paddingTop: 5,
            }}
          >
            <Image
              source={require("../../../../../assets/home/mi_beneficio.png")}
              style={{ width: 70, height: 70 }}
            />
            <Text style={{ textAlign: "center", color: "#329BF8" }}>Mis</Text>
            <Text style={{ textAlign: "center", color: "white" }}>
              Beneficios
            </Text>
          </View>
        </View>

        <Divider style={styles.divider} />
        <View style={styles.viewTitle}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.name}>Beneficios</Text>
          </View>
          <Text style={styles.description}>Exclusivos para socios</Text>
        </View>
        <Carousel
          arrayImages={images}
          height={250}
          width={screenWidth}
        ></Carousel>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    marginTop: 40,
  },
  divider: {
    backgroundColor: "gray",
    marginRight: 40,
    marginLeft: 40,
  },
  viewTitle: {
    padding: 10,
    marginLeft: 40,
  },
  description: {
    marginTop: 5,
    color: "#2884DE",
  },
  name: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
});
