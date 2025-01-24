import { Modal, Platform, View } from "react-native";

import { useState } from "react";
import { CustomView } from "../../components/ui/CustomView";
import { Title } from "../../components/ui/Title";
import { Button } from "../../components/ui/Button";
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
        <CustomView
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
        </CustomView>
      </Modal>
    </CustomView>
  );
};
