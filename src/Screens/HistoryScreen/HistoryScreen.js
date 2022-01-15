import React from "react";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  SafeAreaLayout,
  MainHeader,
  IMIcon,
  ICON_TYPE,
  TripCard,
  EmptyContainer,
} from "../../Components";
import { COLORS, hp, IMAGES, wp } from "../../Styles";
import styles from "./styles";
import { navigate, pop } from "../../Navigation/RootNavigation";
import { CheckRunningFeels, GetFullDate, TimeFormat } from "../../Helper";
import { RemoveTrip } from "../../Redux/Actions";

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
  const dispatch = useDispatch();
  const renderItem = ({ item, index }) => {
    return (
      <TripCard
        key={index?.toString()}
        date={GetFullDate(Date.parse(item?.date))}
        time={TimeFormat(item?.time)}
        steps={item?.steps}
        distance={item?.distance.toFixed(2)}
        status={CheckRunningFeels(item?.distance, item?.time)}
        style={styles.detailsContainer}
        onPress={() => {
          navigate("DetailsScreen", { tripDetails: item });
        }}
        onRemovePress={() => {
          dispatch(RemoveTrip(item?.id));
        }}
      />
    );
  };
  const renderEmptyHistory = () => (
    <>
      {trips?.length === 0 && (
        <EmptyContainer
          image={IMAGES.emptyHistory}
          title="There is No History Tracking"
          style={{ marginTop: hp(120) }}
        />
      )}
    </>
  );
  return (
    <SafeAreaLayout header={renderHeader()}>
      <FlatList
        data={trips}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.mainContainer}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        ListFooterComponent={renderEmptyHistory}
      />
    </SafeAreaLayout>
  );
}
