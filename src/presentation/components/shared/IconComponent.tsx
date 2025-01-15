import { Ionicons } from "@expo/vector-icons";

interface Props {
  name: keyof typeof Ionicons.glyphMap;
  size?: number;
  color?: string;
}
export const IConComponent = ({ name, size = 60, color = "blue" }: Props) => {
  return (
    <Ionicons
      name={name}
      size={size}
      color={color}
    />
  );
};
