import { useContext } from "react";
import { Button } from "../../components/ui/Button";
import { CustomView } from "../../components/ui/CustomView";
import { Title } from "../../components/ui/Title";
import { ThemeContext } from "../../context/ThemeContext";
export const ChangeThemeScreen = () => {
  const { setTheme } = useContext(ThemeContext);
  return (
    <CustomView margin>
      <Title
        safe
        text=" Cambiar theme"
      />

      <Button
        style={{ marginBottom: 20 }}
        text="Light"
        onPress={() => setTheme("ligth")}
      />

      <Button
        text="Dark"
        onPress={() => setTheme("dark")}
      />
    </CustomView>
  );
};
