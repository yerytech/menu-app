import { StyleSheet, Text, View } from "react-native";
import { HomeScreen } from "./presentation/screens/home/HomeScreen";
import React, { PropsWithChildren } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigation } from "./presentation/navigator/AppNavigation";
import { ThemeProvider } from "./presentation/context/ThemeContext";

const AppSatate = ({ children }: PropsWithChildren) => {
  return (
    <NavigationContainer>
      <ThemeProvider>{children}</ThemeProvider>
    </NavigationContainer>
  );
};
export default function App() {
  return (
    <AppSatate>
      <AppNavigation />
    </AppSatate>
  );
}
