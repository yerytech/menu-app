import { useRef } from "react";
import { Animated, Easing, PanResponder } from "react-native";

export const useAnimation = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const animateOpacity = useRef(new Animated.Value(0.0)).current;
  const animateTop = useRef(new Animated.Value(0)).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        },
      ],
      { useNativeDriver: false }
    ),

    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        { toValue: { x: 0, y: 0 }, useNativeDriver: false } // Back to zero
      ).start();
    },
  });

  const fadeIn = ({ duration = 300, toValue = 1, callback = () => {} }) => {
    Animated.timing(animateOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callback);
  };
  const FadeOut = ({ duration = 300, toValue = 0, callback = () => {} }) => {
    Animated.timing(animateOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callback);
    // () => animateTop.resetAnimation();
  };

  const moveTop = ({
    initialposition = 0,
    toValue = 0,
    duration = -300,
    easing = Easing.linear,
    callback = () => {},
  }) => {
    animateTop.setValue(initialposition);
    Animated.timing(animateTop, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
      easing: easing,
    }).start(callback);
  };

  return {
    //  properties
    animateOpacity,
    animateTop,
    panResponder,
    pan,

    // methods
    fadeIn,
    FadeOut,
    moveTop,
  };
};
