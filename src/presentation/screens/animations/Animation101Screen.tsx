import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
} from "react-native";
import { colors } from "../../../config/theme/theme";
import { useAnimation } from "../../hooks/useAnimation";
import { CustomView } from "../../components/ui/CustomView";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const Animation101Screen = () => {
  const { width, height } = useWindowDimensions();
  const { colors } = useContext(ThemeContext);
  const { animateOpacity, animateTop, fadeIn, FadeOut, moveTop } =
    useAnimation();
  return (
    <CustomView style={styles.container}>
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
        style={[
          styles.pressableStyle,
          {
            borderColor: colors.text,
            width: width * 0.2,
            height: height * 0.05,
          },
        ]}
      >
        <Text style={{ color: colors.text }}>FadeIn</Text>
      </Pressable>
      <Pressable
        onPress={() => FadeOut({})}
        style={[
          styles.pressableStyle,
          {
            borderColor: colors.text,
            width: width * 0.2,
            height: height * 0.05,
          },
        ]}
      >
        <Text style={{ color: colors.text }}>FadeOut</Text>
      </Pressable>
    </CustomView>
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
  pressableStyle: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 10,
  },
});
