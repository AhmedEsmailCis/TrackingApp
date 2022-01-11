import React from "react";
import { FlatList } from "react-native";
import { SafeAreaLayout, MainHeader, IMIcon, ICON_TYPE, TripCard } from "../../Components";
import { COLORS, wp } from "../../Styles";
import styles from "./styles";
import { navigate, pop } from "../../Navigation/RootNavigation";

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
  const dummyData = [
    {
      date: "15 May 2021",
      time: "00:00:30",
      steps: 150,
      distance: 266,
      status: "superFast", // walking superFast running
    },
    {
      date: "20 July 2021",
      time: "00:30:30",
      steps: 3200,
      distance: 208,
      status: "walking", // walking superFast running
    },
    {
      date: "01 Aug 2021",
      time: "00:15:25",
      steps: 3200,
      distance: 170,
      status: "running", // walking superFast running
    },
    {
      date: "15 May 2021",
      time: "00:00:30",
      steps: 150,
      distance: 400,
      status: "superFast", // walking superFast running
    },
    {
      date: "20 July 2021",
      time: "00:30:30",
      steps: 3200,
      distance: 300,
      status: "walking", // walking superFast running
    },
    {
      date: "01 Aug 2021",
      time: "00:15:25",
      steps: 3200,
      distance: 300,
      status: "running", // walking superFast running
    },
    {
      date: "15 May 2021",
      time: "00:00:30",
      steps: 150,
      distance: 300,
      status: "superFast", // walking superFast running
    },
    {
      date: "20 July 2021",
      time: "00:30:30",
      steps: 3200,
      distance: 300,
      status: "walking", // walking superFast running
    },
    {
      date: "01 Aug 2021",
      time: "00:15:25",
      steps: 3200,
      distance: 300,
      status: "running", // walking superFast running
    },
  ];
  const renderItem = ({ item, index }) => {
    return (
      <TripCard
        key={index?.toString()}
        date={item?.date}
        time={item?.time}
        steps={item?.steps}
        distance={item?.distance}
        status={item?.status}
        onPress={() => {
          navigate("DetailsScreen");
        }}
      />
    );
  };
  return (
    <SafeAreaLayout header={renderHeader()}>
      <FlatList
        data={dummyData}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.mainContainer}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </SafeAreaLayout>
  );
}
