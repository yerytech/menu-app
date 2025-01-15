import { StyleSheet, Text, View } from "react-native";

import { IConComponent } from "../../components/shared/IconComponent";

export const HomeScreen = () => {
  return (
    <View style={style.containter}>
      <IConComponent name={"airplane"} />
    </View>
  );
};

const style = StyleSheet.create({
  containter: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
