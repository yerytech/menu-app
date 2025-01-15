import { StyleSheet, Text, View } from "react-native";
import { HomeScreen } from "./presentation/screens/home/HomeScreen";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "./presentation/navigator/AppNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
}
