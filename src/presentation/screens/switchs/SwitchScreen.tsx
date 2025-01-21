import { Switch } from "react-native";
import { Card } from "../../components/ui/Card";
import { CustomView } from "../../components/ui/CustomView";

import React, { useState } from "react";
import { CustomSwich } from "../../components/ui/CustomSwitch";
export const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });
  return (
    <CustomView style={{ paddingTop: 100, paddingHorizontal: 10 }}>
      <Card>
        <CustomSwich
          isOn={state.isActive}
          onChange={(value) => setState({ ...state, isActive: value })}
          text="Encendido"
        />
        <CustomSwich
          isOn={state.isHungry}
          onChange={(value) => setState({ ...state, isHungry: value })}
          text="Tiene Hambre?"
        />
        <CustomSwich
          isOn={state.isHappy}
          onChange={(value) => setState({ ...state, isHappy: value })}
          text="Es Feliz?"
        />
      </Card>
    </CustomView>
  );
};
function setIsEnabled(arg0: (previousState: any) => boolean) {
  throw new Error("Function not implemented.");
}
