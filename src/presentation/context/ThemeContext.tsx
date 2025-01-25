import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { darkColors, lightColors, ThemeColors } from "../../config/theme/theme";
import { useColorScheme } from "react-native";

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

  useEffect(() => {
    if (colorsScheme === "dark") {
      setCurrentTheme("dark");
    } else {
      setCurrentTheme("ligth");
    }
  }, [colorsScheme]);

  const setTheme = (theme: ThemeColor) => {
    setCurrentTheme(theme);
  };
  return (
    <ThemeContext.Provider
      value={{
        currentTheme: currentTheme,
        colors: currentTheme === "ligth" ? lightColors : darkColors,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
