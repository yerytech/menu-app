import {
  ActivityIndicator,
  Animated,
  Image,
  ImageStyle,
  StyleProp,
  Text,
  View,
} from "react-native";
import { useAnimation } from "../../hooks/useAnimation";
import { useState } from "react";

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style }: Props) => {
  const { animateOpacity, fadeIn } = useAnimation();
  const [isloading, setIsloading] = useState(true);
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      {isloading && (
        <ActivityIndicator
          style={{
            position: "absolute",
          }}
          color="grey"
          size={30}
        />
      )}

      <Animated.Image
        src={uri}
        onLoadEnd={() => {
          fadeIn({ duration: 1000 });
          setIsloading(false);
        }}
        style={[style, { opacity: animateOpacity }]}
      />
    </View>
  );
};
