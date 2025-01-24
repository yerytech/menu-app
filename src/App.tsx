import React, { PropsWithChildren, useContext } from "react";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { Navigator } from "./presentation/navigator/Navigator";
import {
  ThemeContext,
  ThemeProvider,
} from "./presentation/context/ThemeContext";

const AppNavigation = ({ children }: PropsWithChildren) => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <NavigationContainer
      theme={currentTheme === "dark" ? DarkTheme : DefaultTheme}
    >
      {children}
    </NavigationContainer>
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
