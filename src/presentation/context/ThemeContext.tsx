import { Children, createContext, PropsWithChildren } from "react";
import { lightColors, ThemeColors } from "../../config/theme/theme";

type ThemeColor = "ligth" | "dark";

interface ThemeContextProps {
  currentTheme: ThemeColor;
  colors: ThemeColors;
  setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const setTheme = (theme: ThemeColor) => {
    console.log(theme);
  };
  return (
    <ThemeContext.Provider
      value={{
        currentTheme: "ligth",
        colors: lightColors,
        setTheme: setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
