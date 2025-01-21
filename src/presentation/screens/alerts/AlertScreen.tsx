import { Alert, Text, View } from "react-native";
import { CustomView } from "../../components/ui/CustomView";
import { Title } from "../../components/ui/Title";
import { globalStyles } from "../../../config/theme/theme";
import { Button } from "../../components/ui/Button";
import { Divider } from "../../components/ui/Divider";
export const AlertScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed"),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title
        safe
        text={"Alert"}
      />

      <Button
        text={"Alert  1"}
        onPress={createTwoButtonAlert}
      />
      <View style={{ height: 10 }} />
      <Button
        text={"Alert 2"}
        onPress={() => {}}
      />
      <View style={{ height: 10 }} />
      <Button
        text={"Alert 3"}
        onPress={() => {}}
      />
    </CustomView>
  );
};
