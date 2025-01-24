import { Pressable, StyleSheet, Text, View } from "react-native";
import { IConComponent } from "../shared/IconComponent";
import { useNavigation } from "@react-navigation/native";
import { Divider } from "./Divider";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

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
  const { colors } = useContext(ThemeContext);
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
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{ color: colors.text, width: 200 }}
          >
            {name}
          </Text>
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
