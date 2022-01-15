import React, { useEffect, useRef } from "react";
import { ScrollView, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import reactotron from "reactotron-react-native";
import { ICON_TYPE, IMIcon, MainHeader, SafeAreaLayout, TripCard } from "../../Components";
import {
  GetFullDate,
  GOOGLE_MAPS_APIKEY,
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
  TimeFormat,
} from "../../Helper";
import { pop } from "../../Navigation/RootNavigation";
import { COLORS, wp } from "../../Styles";
import styles from "./styles";

export function DetailsScreen({ route }) {
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
  const { tripDetails } = route?.params;
  const mapRef = useRef();
  useEffect(() => {
    reactotron.log("tripDetails", tripDetails);
  }, []);
  useEffect(() => {
    setTimeout(
      () =>
        mapRef?.current?.fitToCoordinates(
          [
            { latitude: 30.307787320813976, longitude: 31.723474285064636 },
            { latitude: 30.306870376448636, longitude: 31.780129764918453 },
          ],
          {
            // edgePadding: { top: 70, right: 40, bottom: 40, left: 70 },
            animated: true,
          },
        ),
      1000,
    );
  }, []);
  return (
    <SafeAreaLayout header={renderHeader()}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TripCard
          date={GetFullDate(Date.parse(tripDetails?.date))}
          time={TimeFormat(tripDetails?.time)}
          steps={tripDetails?.steps}
          distance={tripDetails?.distance.toFixed(2)}
          status={tripDetails?.status}
          style={styles.detailsContainer}
        />
        <View style={styles.mapContainer}>
          <MapView
            ref={mapRef}
            scrollEnabled
            zoomEnabled
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={{
              latitude: 30.307787320813976,
              longitude: 31.723474285064636,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}>
            <Marker
              coordinate={{
                latitude: 30.307787320813976,
                longitude: 31.723474285064636,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }}>
              {/* <EndPoint /> */}
            </Marker>
            <Marker
              coordinate={{
                latitude: 30.306870376448636,
                longitude: 31.780129764918453,
                latitudeDelta: 0.00994052098169007,
                longitudeDelta: 0.007621161639693952,
              }}>
              {/* <StartPoint /> */}
            </Marker>
            <MapViewDirections
              strokeColor={COLORS.AppColor3}
              strokeWidth={3}
              mode="WALKING"
              origin={{
                latitude: 30.307787320813976,
                longitude: 31.723474285064636,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }}
              destination={{
                latitude: 30.306870376448636,
                longitude: 31.780129764918453,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }}
              apikey={GOOGLE_MAPS_APIKEY}
            />
          </MapView>
        </View>
      </ScrollView>
    </SafeAreaLayout>
  );
}
