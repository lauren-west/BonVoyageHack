import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MealDescription from "./components/meal/meal-description";
import MealStarRating from "./components/meal/meal-star-ratings";
import MealTitle from "./components/meal/meal-title";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <MealTitle title="Hamburger" />
      <MealDescription description="Hamburger contain meat yum!" />
      <MealStarRating />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
