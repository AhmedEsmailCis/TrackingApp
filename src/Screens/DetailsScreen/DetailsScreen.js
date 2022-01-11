import React from "react";
import { Text } from "react-native";
import { ICON_TYPE, IMIcon, MainHeader, SafeAreaLayout } from "../../Components";
import { pop } from "../../Navigation/RootNavigation";
import { COLORS, wp } from "../../Styles";
import styles from "./styles";

export function DetailsScreen() {
  const leftIcon = () => (
    <IMIcon
      origin={ICON_TYPE.FONT_AWESOME5}
      name="arrow-left"
      size={wp(20)}
      color={COLORS.AppColor1}
    />
  );
  const renderHeader = () => (
    <MainHeader
      title="Details"
      leftIcon={leftIcon}
      onLeftIconPress={() => {
        pop();
      }}
    />
  );
  return (
    <SafeAreaLayout header={renderHeader()}>
      <Text>Details Screen</Text>
    </SafeAreaLayout>
  );
}
