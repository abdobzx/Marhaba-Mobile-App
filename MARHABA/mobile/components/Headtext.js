import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Swipe from "./Swipe";
import SwipeCity from "./SwipeCity";

export default function HeadSwipWithTxt() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <SwipeCity />
        <Text style={styles.title}>CASABLANCA CITY</Text>
        <Text style={styles.description}>
          Explore the bustling city of Casablanca with its beautiful palm-lined streets, the Atlantic ocean on the horizon, and towering business buildings at every turn. Casablanca is the economic heart of Morocco.
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0EEEE",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 2,
  },
  content: {
    alignItems: "center",
  },
  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 10,
    marginBottom: 5,
  },
  description: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});