import { StyleProp, View, ViewStyle } from "react-native";
import { colors } from "../../../config/theme/theme";
interface Props {
  style?: StyleProp<ViewStyle>;
}
export const Divider = ({ style }: Props) => {
  return (
    <View style={{ backgroundColor: colors.cardBackground }}>
      <View
        style={[
          {
            borderRadius: 100,
            borderBottomWidth: 1,
            borderBottomColor: "gray",
            marginHorizontal: 10,
            opacity: 0.5,
          },
          style,
        ]}
      />
    </View>
  );
};
