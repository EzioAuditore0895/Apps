import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Carousel from "../dashboard/DashboardCarousel";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import styles from "./Dashboard.style";

export default function Dashboard() {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get("window").width;
  const images = [
    "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
  ];
  //console.log("Tamaño", screenWidth);
  return (
    <ImageBackground
      source={require("../../../../../assets/home/background_home.png")}
      style={{ flex: 1 }}
    >
      <View style={styles.viewBody}>
        <View style={styles.viewAgendaConsult}>
          <TouchableOpacity style={styles.viewMiAgenda}>
            <Image
              source={require("../../../../../assets/home/mi_agenda.png")}
              style={styles.images}
            />
            <Text style={{ textAlign: "center", color: "#329BF8" }}>Mi</Text>
            <Text style={{ textAlign: "center", color: "white" }}>Agenda</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.viewMiConsultorio}>
            <Image
              source={require("../../../../../assets/home/mi_consultorio.png")}
              style={styles.images}
            />
            <Text style={{ textAlign: "center", color: "#329BF8" }}>Mis</Text>
            <Text style={{ textAlign: "center", fontSize: 12, color: "white" }}>
              Consultorios
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewProfesionBeneficio}>
          <TouchableOpacity style={styles.viewMiProfesion}>
            <Image
              source={require("../../../../../assets/home/mi_profesion.png")}
              style={styles.images}
            />
            <Text style={{ textAlign: "center", color: "#329BF8" }}>Mis</Text>
            <Text style={{ textAlign: "center", color: "white" }}>
              Profesiones
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.viewMiBeneficio}
            onPress={() => navigation.navigate("benefits")}
          >
            <Image
              source={require("../../../../../assets/home/mi_beneficio.png")}
              style={styles.images}
            />
            <Text style={{ textAlign: "center", color: "#329BF8" }}>Mis</Text>
            <Text style={{ textAlign: "center", color: "white" }}>
              Beneficios
            </Text>
          </TouchableOpacity>
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
          height={120}
          width={screenWidth}
        ></Carousel>
      </View>
    </ImageBackground>
  );
}
