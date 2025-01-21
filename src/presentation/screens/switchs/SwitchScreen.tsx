import { Card } from "../../components/ui/Card";
import { CustomView } from "../../components/ui/CustomView";

import React, { useState } from "react";
import { CustomSwich } from "../../components/ui/CustomSwitch";
import { Divider } from "../../components/ui/Divider";
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
        <Divider />

        <CustomSwich
          isOn={state.isHungry}
          onChange={(value) => setState({ ...state, isHungry: value })}
          text="Tiene Hambre?"
        />
        <Divider />
        <CustomSwich
          isOn={state.isHappy}
          onChange={(value) => setState({ ...state, isHappy: value })}
          text="Es Feliz?"
        />
      </Card>
    </CustomView>
  );
};
