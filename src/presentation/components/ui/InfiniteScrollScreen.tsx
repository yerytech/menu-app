import { FlatList, Text } from "react-native";
import { CustomView } from "./CustomView";
import { Title } from "./Title";
import { useState } from "react";
export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 5]);

  const loadMore = () => {
    const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i);
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    });
  };

  return (
    <CustomView margin>
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
      />
    </CustomView>
  );
};

interface ListItemProps {
  number: number;
}

const ListItem = ({ number }: ListItemProps) => {
  return <Text style={{ height: 300, fontSize: 50 }}> {number}</Text>;
};