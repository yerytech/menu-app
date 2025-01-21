import { SectionList, Text, useWindowDimensions } from "react-native";
import { CustomView } from "../../components/ui/CustomView";
import { Title } from "../../components/ui/Title";
import { Card } from "../../components/ui/Card";
import { houses } from "../../../helper/sectionListData";
import { SubTitle } from "../../components/ui/SubTitle";
import { Divider } from "../../components/ui/Divider";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const CustomSectionListScreen = () => {
  const { height } = useWindowDimensions();
  const { top } = useSafeAreaInsets();
  return (
    <CustomView margin>
      <Title
        safe
        text="Lista de Personajes"
      />
      <Card>
        <SectionList
          ListHeaderComponent={() => <Title text="Personajes" />}
          sections={houses}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <>
              <Text style={{ marginVertical: 2 }}>{item}</Text>
              <Divider />
            </>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <SubTitle
              text={title}
              // backgroundColor={"green"}
            />
          )}
          stickySectionHeadersEnabled
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => (
            <Title text={`Secciones: ${houses.length}`} />
          )}
          style={{ height: height - top - 50 }}
        />
      </Card>
    </CustomView>
  );
};
