import React, { PropsWithChildren, useContext } from "react";

import { Navigator } from "./presentation/navigator/Navigator";
import { ThemeProvider } from "./presentation/context/ThemeContext";

export const App = () => {
  return (
    <ThemeProvider>
      <Navigator />
    </ThemeProvider>
  );
};
