import { StyleProp, Text, View, ViewStyle } from "react-native";
import { colors, globalStyles } from "../../../config/theme/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  text: string;
  safe?: boolean;
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
}

export const SubTitle = ({
  text,
  safe = false,
  backgroundColor = colors.background,
  style,
}: Props) => {
  const { top } = useSafeAreaInsets();

  return (
    <Text
      style={[
        {
          ...globalStyles.subTitle,
          marginTop: safe ? top : 0,
          marginBottom: 10,
          backgroundColor: backgroundColor,
        },
        style,
      ]}
    >
      {text}
    </Text>
  );
};
