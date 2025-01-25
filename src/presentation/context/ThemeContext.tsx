import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { darkColors, lightColors, ThemeColors } from "../../config/theme/theme";
import { Appearance, AppState, StatusBar, useColorScheme } from "react-native";

import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";

type ThemeColor = "ligth" | "dark";

interface ThemeContextProps {
  currentTheme: ThemeColor;
  colors: ThemeColors;
  setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const colorsScheme = useColorScheme();

  const [currentTheme, setCurrentTheme] = useState<ThemeColor>("ligth");
  const isDark = currentTheme === "dark";
  const colors = isDark ? darkColors : lightColors;

  useEffect(() => {
    if (colorsScheme === "dark") {
      setCurrentTheme("dark");
    } else {
      setCurrentTheme("ligth");
    }
  }, [colorsScheme]);

  // useEffect(() => {
  //   const subscription = AppState.addEventListener("change", (nextAppState) => {
  //     console.log("nextAppState", nextAppState);

  //     const colorsScheme = Appearance.getColorScheme();
  //     setCurrentTheme(colorsScheme === "dark" ? "dark" : "ligth");
  //   });

  //   return () => {
  //     subscription.remove();
  //   };
  // }, []);

  const setTheme = (theme: ThemeColor) => {
    setCurrentTheme(theme);
    const { colors } = useContext(ThemeContext);
  };
  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <StatusBar
        backgroundColor={colors.background}
        barStyle={isDark ? "light-content" : "dark-content"}
      />
      <ThemeContext.Provider
        value={{
          currentTheme: currentTheme,
          colors: colors,
          setTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </NavigationContainer>
  );
};
