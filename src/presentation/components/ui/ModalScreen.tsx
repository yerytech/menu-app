import { Modal, Platform, Text, View } from "react-native";
import { CustomView } from "./CustomView";
import { Title } from "./Title";
import { Button } from "./Button";
import { useState } from "react";
export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <CustomView margin>
      <Title
        safe
        text="Modal"
      />
      <Button
        text={"Abrir Modal"}
        onPress={() => setIsVisible(true)}
      />

      <Modal
        visible={isVisible}
        animationType="slide"
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0,1)",
          }}
        >
          <View style={{ paddingHorizontal: 10 }}>
            <Title
              safe
              text={"Modal content"}
            />
          </View>
          <View style={{ flex: 1 }} />
          <Button
            style={{ height: Platform.OS === "ios" ? 40 : 60, borderRadius: 0 }}
            text={"Cerrar Modal"}
            onPress={() => setIsVisible(false)}
          />
        </View>
      </Modal>
    </CustomView>
  );
};
