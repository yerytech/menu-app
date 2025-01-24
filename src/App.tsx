import React, { PropsWithChildren } from "react";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { Navigator } from "./presentation/navigator/Navigator";
import {
  ThemeContext,
  ThemeProvider,
} from "./presentation/context/ThemeContext";

const AppNavigation = ({ children }: PropsWithChildren) => {
  return (
    <NavigationContainer theme={DarkTheme}>{children}</NavigationContainer>
  );
};

const AppTheme = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <AppNavigation>{children}</AppNavigation>
    </ThemeProvider>
  );
};

export default function App() {
  return (
    <AppTheme>
      <Navigator />
    </AppTheme>
  );
}
