import { Animated, StyleSheet, Text, View } from "react-native";
import { useAnimation } from "../../hooks/useAnimation";
export const Animation102Screen = () => {
  const { panResponder, pan } = useAnimation();
  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.tealBox]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tealBox: {
    width: 80,
    height: 80,
    backgroundColor: "#61dafb",
    borderRadius: 10,
  },
});
