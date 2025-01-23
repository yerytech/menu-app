import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { CustomView } from "./CustomView";
import { Title } from "./Title";
import { useState } from "react";
import { colors } from "../../../config/theme/theme";
import { FadeInImage } from "./FadeInImage";
export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i);
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 3000);
  };

  return (
    <View style={{ backgroundColor: "#000" }}>
      <Title
        safe
        text="InfiniteScroll"
      />
      <FlatList
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        data={numbers}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => <ListItem number={item} />}
        ListFooterComponent={() => (
          <View
            style={{ height: 150, justifyContent: "center", marginBottom: 50 }}
          >
            <ActivityIndicator
              size={40}
              color={colors.primary}
            />
            <Text>Loading...</Text>
          </View>
        )}
      />
    </View>
  );
};

interface ListItemProps {
  number: number;
}

const ListItem = ({ number }: ListItemProps) => {
  return (
    <FadeInImage
      style={{ width: "100%", height: 400 }}
      uri={`https://picsum.photos/id/${number}/500/400`}
    />

    // <Image
    //   src={`https://picsum.photos/id/${number}/500/400`}
    //   style={{ width: "100%", height: 400 }}
    // />
  );
};
