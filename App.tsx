import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./components/common/button";
import MealDescription from "./components/meal/meal-description";
import MealIcon from "./components/meal/meal-icon";
import MealStarRating from "./components/meal/meal-star-ratings";
import MealTitle from "./components/meal/meal-title";
import MealWrittenReview from "./components/meal/meal-written-review";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      <MealTitle title="Hamburger" />
      <MealIcon description="rocket"/>
      <MealDescription description="Hamburger contain meat yum!" />
      <MealStarRating />
      <MealWrittenReview/>
      <Button text="Submit Review" onPress={onPress} color="#846434"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function onPress(){
  console.log("Done Pressed!")
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
