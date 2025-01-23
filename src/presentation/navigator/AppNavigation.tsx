import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/home/HomeScreen";
import { Animation101Screen } from "../screens/animations/Animation101Screen";
import { Animation102Screen } from "../screens/animations/Animation102Screen";
import { SwitchScreen } from "../screens/switchs/SwitchScreen";
import { AlertScreen } from "../screens/alerts/AlertScreen";
import { TextInputScreen } from "../screens/inputs/TextInputScreen";
import { PullToRefreshScreen } from "../screens/ui/PullToRefreshScreen";
import { CustomSectionListScreen } from "../screens/ui/CustomSectionListScreen";
import { ModalScreen } from "../components/ui/ModalScreen";
import { InfiniteScrollScreen } from "../components/ui/InfiniteScrollScreen";
import { SlidesScreen } from "../screens/ui/SlidesScreen";
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
      <Stack.Screen
        name="PullToRefreshScreen"
        component={PullToRefreshScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CustomSectionListScreen"
        component={CustomSectionListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ModalScreen"
        component={ModalScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="InfiniteScrollScreen"
        component={InfiniteScrollScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SlidesScreen"
        component={SlidesScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
