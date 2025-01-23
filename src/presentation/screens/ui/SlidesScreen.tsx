import {
  FlatList,
  Image,
  ImageSourcePropType,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { colors, globalStyles } from "../../../config/theme/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "../../components/ui/Button";
import { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: "Titulo 1",
    desc: "Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.",
    img: require("../../assets/slide-1.png"),
  },
  {
    title: "Titulo 2",
    desc: "Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ",
    img: require("../../assets/slide-2.png"),
  },
  {
    title: "Titulo 3",
    desc: "Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.",
    img: require("../../assets/slide-3.png"),
  },
];

export const SlidesScreen = () => {
  const navigate = useNavigation();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const { top } = useSafeAreaInsets();
  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement } = e.nativeEvent;
    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);
    setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0);
  };

  const scrollToNextSlide = (index: number) => {
    if (!flatListRef.current) return;
    flatListRef.current.scrollToIndex({ index: index, animated: true });
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <FlatList
        ref={flatListRef}
        horizontal
        style={{ marginTop: top }}
        data={items}
        keyExtractor={(items) => items.title}
        renderItem={({ item }) => <SlideItem item={item} />}
        pagingEnabled
        scrollEnabled={false}
        onScroll={(e) => {
          onScroll(e);
        }}
      />
      {currentSlideIndex === items.length - 1 ? (
        <Button
          style={{ position: "absolute", bottom: 60, right: 30, width: 100 }}
          text="Exit"
          onPress={() => navigate.goBack()}
        />
      ) : (
        <Button
          style={{ position: "absolute", bottom: 60, right: 30, width: 100 }}
          text="Next"
          onPress={() => scrollToNextSlide(currentSlideIndex + 1)}
        />
      )}
    </View>
  );
};

interface SlideItemsProps {
  item: Slide;
}

const SlideItem = ({ item }: SlideItemsProps) => {
  const { width } = useWindowDimensions();
  const { title, img, desc } = item;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        borderRadius: 5,
        padding: 40,
        justifyContent: "center",
        width: width,
      }}
    >
      <Image
        source={img}
        style={{
          width: width * 0.7,
          height: width * 0.7,
          resizeMode: "center",
          alignSelf: "center",
        }}
      />
      <Text
        style={[
          globalStyles.title,
          {
            color: colors.primary,
          },
        ]}
      >
        {title}
      </Text>
      <Text style={{ color: colors.text, marginTop: 20 }}> {desc}</Text>
    </View>
  );
};
