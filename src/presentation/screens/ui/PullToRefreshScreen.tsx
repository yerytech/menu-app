import { RefreshControl, ScrollView } from "react-native";
import { CustomView } from "../../components/ui/CustomView";
import { Title } from "../../components/ui/Title";
import { useState } from "react";
import { colors } from "../../../config/theme/theme";
export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 5000);
  };

  return (
    <CustomView margin>
      <Title
        safe
        text={"PullToRefreshScreen"}
      />
      <ScrollView
        refreshControl={
          <RefreshControl
            colors={[colors.primary, "red", "orange", "blue"]}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      ></ScrollView>
    </CustomView>
  );
};
