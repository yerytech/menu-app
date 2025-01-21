import { Platform, StyleSheet, Switch, Text, View } from "react-native";
import { colors } from "../../../config/theme/theme";

interface Props {
  isOn: boolean;
  text?: string;
  onChange: (value: boolean) => void;
}

export const CustomSwich = ({ isOn, text, onChange }: Props) => {
  return (
    <View style={style.SwitchRow}>
      {text && <Text style={{ color: colors.text }}>{text}</Text>}
      <Switch
        thumbColor={Platform.OS === "android" ? colors.primary : ""}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onChange}
        value={isOn}
      />
    </View>
  );
};

const style = StyleSheet.create({
  SwitchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
});
