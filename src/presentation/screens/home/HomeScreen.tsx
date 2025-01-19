import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../../config/theme/theme";
import { ScrollView } from "react-native-gesture-handler";
import { Title } from "../../components/ui/Title";
import { menuItems } from "../../../helper/menu-items";
import { MenuItem } from "../../components/ui/MenuItem";

export const HomeScreen = () => {
  return (
    <View style={globalStyles.mainContainer}>
      <View style={globalStyles.globalMargin}>
        <ScrollView>
          <Title
            text="Home"
            save
          />
          {menuItems.map((item) => (
            <MenuItem
              key={item.component}
              name={item.name}
              icon={item.icon}
              component={item.component}
            />
          ))}
        </ScrollView>
      </View>
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
