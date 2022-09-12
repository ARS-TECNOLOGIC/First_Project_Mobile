import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View,} from "react-native";
import Constants from 'expo-constants';

import Card from "./components/Card";
import { ScrollView } from "react-native";

export default function App() {
  return (
   
    <View style={styles.container}>

      <StatusBar style="light" backgroundColor="orange" />
      
      <Card nomeProd="Beef Burger" caloriaProd="70" precoProd="12.00" imgProd={require('./assets/beefBurger.png')}/>
      <Card nomeProd="Pancakes" caloriaProd="60" precoProd="15.00" imgProd={require('./assets/pancakes.png')}/>
    
    </View>
   
  );
}

const styles = StyleSheet.create({
  container:{
    paddingTop:Constants.statusBarHeight,
    flex:1,
    backgroundColor: '#f1f1f1',
    flexDirection: "column",
    alignItems:'center',
    justifyContent:'center',
  },

});
