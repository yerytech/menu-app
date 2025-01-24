import { Animated, StyleSheet } from "react-native";
import { useAnimation } from "../../hooks/useAnimation";
import { CustomView } from "../../components/ui/CustomView";
export const Animation102Screen = () => {
  const { panResponder, pan } = useAnimation();
  return (
    <CustomView style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.tealBox]}
      />
    </CustomView>
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
