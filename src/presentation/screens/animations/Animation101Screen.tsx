import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { colors } from "../../../config/theme/theme";
import { useAnimation } from "../../hooks/useAnimation";

export const Animation101Screen = () => {
  const { animateOpacity, animateTop, fadeIn, FadeOut, moveTop } =
    useAnimation();
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity: animateOpacity,
          transform: [
            {
              translateY: animateTop,
            },
          ],
        }}
      />
      <Pressable
        onPress={() => {
          fadeIn({});
          moveTop({
            initialposition: -500,
            easing: Easing.bounce,
            duration: 700,
          });
        }}
        style={{ marginTop: 20 }}
      >
        <Text>FadeIn</Text>
      </Pressable>
      <Pressable
        onPress={() => FadeOut({})}
        style={{ marginTop: 20 }}
      >
        <Text>FadeOut</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
  purpleBox: {
    backgroundColor: colors.primary,
    width: 150,
    height: 150,
  },
});
