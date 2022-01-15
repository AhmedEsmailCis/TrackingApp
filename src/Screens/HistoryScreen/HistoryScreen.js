import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import reactotron from "reactotron-react-native";
import { SafeAreaLayout, MainHeader, IMIcon, ICON_TYPE, TripCard } from "../../Components";
import { COLORS, wp } from "../../Styles";
import styles from "./styles";
import { navigate, pop } from "../../Navigation/RootNavigation";
import { GetFullDate, TimeFormat } from "../../Helper";

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
  const trips = useSelector((state) => state.tripsState.trips);
  useEffect(() => {
    reactotron.log("History", trips);
  }, []);
  const renderItem = ({ item, index }) => {
    return (
      <TripCard
        key={index?.toString()}
        date={GetFullDate(Date.parse(item?.date))}
        time={TimeFormat(item?.time)}
        steps={item?.steps}
        distance={item?.distance.toFixed(2)}
        status={item?.status}
        style={styles.detailsContainer}
        onPress={() => {
          navigate("DetailsScreen", { tripDetails: item });
        }}
      />
    );
  };
  return (
    <SafeAreaLayout header={renderHeader()}>
      <FlatList
        data={trips}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.mainContainer}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
      />
    </SafeAreaLayout>
  );
}
