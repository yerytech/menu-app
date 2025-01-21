import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/home/HomeScreen";
import { Animation101Screen } from "../screens/animations/Animation101Screen";
import { Animation102Screen } from "../screens/animations/Animation102Screen";
import { SwitchScreen } from "../screens/switchs/SwitchScreen";
import { AlertScreen } from "../screens/alerts/AlertScreen";
import { TextInputScreen } from "../screens/inputs/TextInputScreen";
const Stack = createStackNavigator();
export const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Animation101Screen"
        component={Animation101Screen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Animation102Screen"
        component={Animation102Screen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SwitchScreen"
        component={SwitchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AlertScreen"
        component={AlertScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TextInputScreen"
        component={TextInputScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
