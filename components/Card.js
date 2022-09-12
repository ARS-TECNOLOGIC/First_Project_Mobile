import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Card(props) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={[styles.cardNome, styles.cardMarginVertical]}>
          {props.nomeProd}
        </Text>
        <Text style={[styles.cardCaloria, styles.cardMarginVertical]}>
          <MaterialCommunityIcons name="fire" size={20} color="#FF4500" />{" "}
          {props.caloriaProd} Calories
        </Text>
        <Text style={[styles.cardPreco, styles.cardMarginVertical]}>
          ${props.precoProd}
        </Text>
      </View>
      <Image style={styles.cardImgProd} source={props.imgProd} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 350,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 3,
  },
  cardNome: {
    fontSize: 20,
    fontWeight: "800",
  },
  cardCaloria: {
    color: "#999999",
    fontWeight: "bold",
  },
  cardPreco: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 18,
  },
  cardMarginVertical: {
    marginVertical: 3,
  },
  cardImgProd: {
    width: 100,
    height: 100,
  },
});
