import { StyleProp, View, ViewStyle } from "react-native";
interface Props {
  style?: StyleProp<ViewStyle>;
}
export const Divider = ({ style }: Props) => {
  return (
    <View
      style={[
        {
          borderBottomWidth: 1,
          borderBottomColor: "green",
          // marginHorizontal: 10,
          opacity: 0.5,
        },
        style,
      ]}
    />
  );
};
