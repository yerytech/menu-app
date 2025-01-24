import { useContext } from "react";
import { Button } from "../../components/ui/Button";
import { CustomView } from "../../components/ui/CustomView";
import { Title } from "../../components/ui/Title";
import { ThemeContext } from "../../context/ThemeContext";
import { Text } from "react-native";
export const ChangeThemeScreen = () => {
  const { setTheme, currentTheme, colors } = useContext(ThemeContext);

  return (
    <CustomView margin>
      <Title
        safe
        text={`Cambiar theme: ${currentTheme}`}
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

      <Text style={{ color: colors.text }}>
        {JSON.stringify(colors, null, 2)}
      </Text>
    </CustomView>
  );
};
