import { Button } from "../../components/ui/Button";
import { CustomView } from "../../components/ui/CustomView";
import { Title } from "../../components/ui/Title";
export const ChangeThemeScreen = () => {
  return (
    <CustomView margin>
      <Title
        safe
        text=" Cambiar theme"
      />

      <Button
        style={{ marginBottom: 20 }}
        text="Light"
        onPress={() => {}}
      />

      <Button
        text="Dark"
        onPress={() => {}}
      />
    </CustomView>
  );
};
