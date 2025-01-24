import { StyleProp, View, ViewStyle } from "react-native";
import { CustomView } from "./CustomView";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
interface Props {
  style?: StyleProp<ViewStyle>;
}
export const Divider = ({ style }: Props) => {
  const { colors } = useContext(ThemeContext);
  return (
    <CustomView style={{ backgroundColor: colors.cardBackground }}>
      <View
        style={[
          {
            borderRadius: 100,
            borderBottomWidth: 1,
            borderBottomColor: colors.text,
            marginHorizontal: 10,
            opacity: 0.5,
          },
          style,
        ]}
      />
    </CustomView>
  );
};
