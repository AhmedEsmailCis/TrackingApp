import React from "react";
import { Text } from "react-native";
import { SafeAreaLayout, MainHeader, IMIcon, ICON_TYPE } from "../../Components";
import { COLORS, wp } from "../../Styles";
import styles from "./styles";
import { pop } from "../../Navigation/RootNavigation";

export function HistoryScreen() {
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
      title="History"
      leftIcon={leftIcon}
      onLeftIconPress={() => {
        pop();
      }}
    />
  );
  return (
    <SafeAreaLayout header={renderHeader()}>
      <Text>History Screen</Text>
    </SafeAreaLayout>
  );
}
