import { StyleProp, View, ViewStyle } from "react-native";
import { globalStyles } from "../../../config/theme/theme";
import { ReactNode } from "react";
interface Props {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  margin?: boolean;
}

export const CustomView = ({ style, children, margin = false }: Props) => {
  return (
    <View
      style={[
        globalStyles.mainContainer,
        style,
        margin && globalStyles.globalMargin,
      ]}
    >
      {children}
    </View>
  );
};
