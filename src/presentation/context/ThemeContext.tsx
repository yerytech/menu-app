import { createContext, PropsWithChildren, useState } from "react";
import { darkColors, lightColors, ThemeColors } from "../../config/theme/theme";

type ThemeColor = "ligth" | "dark";

interface ThemeContextProps {
  currentTheme: ThemeColor;
  colors: ThemeColors;
  setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeColor>("ligth");
  const isDark = currentTheme === "dark";
  const colors = isDark ? darkColors : lightColors;
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
