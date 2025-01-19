import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../../config/theme/theme";
import { IConComponent } from "../shared/IconComponent";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  name: string;
  icon: string;
  component: string;
}

export const MenuItem = ({ name, icon, component }: Props) => {
  return (
    <Pressable onPress={() => console.log("tab")}>
      <View
        style={{ ...styles.container, backgroundColor: colors.cardBackground }}
      >
        <IConComponent
          name={icon}
          size={25}
          style={{ marginRight: 10, color: colors.primary }}
        />
        <Text style={{ color: colors.text }}>{name}</Text>
        <IConComponent
          name="chevron-forward"
          size={25}
          style={{ marginLeft: "auto", color: colors.primary }}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
