import { View } from "react-native";
import { globalStyles } from "../../../config/theme/theme";
import { ScrollView } from "react-native-gesture-handler";
import { Title } from "../../components/ui/Title";
import { menuItems } from "../../../helper/menu-items";
import { MenuItem } from "../../components/ui/MenuItem";
import { animationItems } from "../../../helper/animation-items";
import { uiMenuItems } from "../../../helper/uiMenuItems";
import { Divider } from "../../components/ui/Divider";

export const HomeScreen = () => {
  return (
    <View style={globalStyles.mainContainer}>
      <View style={globalStyles.globalMargin}>
        <ScrollView>
          <Title
            text="Home"
            safe
          />
          <View style={{ marginTop: 20 }}>
            {animationItems.map((item, index) => (
              <MenuItem
                key={item.component}
                {...item}
                isFirst={index === 0}
                isLast={index === animationItems.length - 1}
                icon={item.icon}
                component={item.component}
              />
            ))}
          </View>
          <View style={{ marginTop: 20 }}>
            {menuItems.map((item, index) => (
              <MenuItem
                key={item.component}
                {...item}
                isFirst={index === 0}
                isLast={index === menuItems.length - 1}
                icon={item.icon}
                component={item.component}
              />
            ))}
          </View>
          <View style={{ marginTop: 20 }}>
            {uiMenuItems.map((item, index) => (
              <MenuItem
                key={item.component}
                {...item}
                isFirst={index === 0}
                isLast={index === uiMenuItems.length - 1}
                icon={item.icon}
                component={item.component}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
