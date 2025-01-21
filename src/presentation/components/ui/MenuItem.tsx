import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../../config/theme/theme";
import { IConComponent } from "../shared/IconComponent";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Divider } from "./Divider";
import React from "react";

interface Props {
  name: string;
  icon: string;
  component: string;
  isFirst?: boolean;
  isLast?: boolean;
}

export const MenuItem = ({
  name,
  icon,
  component,
  isFirst = false,
  isLast = false,
}: Props) => {
  const navigation = useNavigation();
  return (
    <>
      <Pressable onPress={() => navigation.navigate(component as never)}>
        <View
          style={{
            ...styles.container,
            backgroundColor: colors.cardBackground,
            ...(isFirst && {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              paddingTop: 10,
            }),
            ...(isLast && {
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              paddingTop: 10,
            }),
          }}
        >
          <IConComponent
            name={icon}
            size={25}
            style={{ marginRight: 10, color: colors.primary }}
          />
          <Text style={{ color: colors.text }}>{name}</Text>
          <IConComponent
            name="chevron-forward"
            size={25}
            style={{ marginLeft: "auto", color: colors.primary }}
          />
        </View>
      </Pressable>
      {!isLast && <Divider />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
