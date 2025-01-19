import { Ionicons } from "@expo/vector-icons";
import { StyleProp, TextStyle } from "react-native";

interface Props {
  name: string;
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
}
export const IConComponent = ({
  name,
  size = 60,
  color = "blue",
  style,
}: Props) => {
  return (
    <Ionicons
      style={style ? style : {}}
      name={name as keyof typeof Ionicons.glyphMap}
      size={size}
      color={color}
    />
  );
};
