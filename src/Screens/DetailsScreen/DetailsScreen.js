import React, { useEffect, useRef, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { ICON_TYPE, IMIcon, MainHeader, SafeAreaLayout, TripCard } from "../../Components";
import { GetFullDate, LATITUDE_DELTA, LONGITUDE_DELTA, TimeFormat } from "../../Helper";
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
  const [showPath, setShowPath] = useState(false);
  useEffect(() => {
    setTimeout(
      () =>
        mapRef?.current?.fitToCoordinates(
          [
            ...tripDetails?.path?.map((item) => ({
              latitude: item?.lat,
              longitude: item?.long,
            })),
          ],
          {
            // edgePadding: { top: 20, right: 50, bottom: 50, left: 50 },
            animated: true,
          },
        ),
      500,
    );
    setTimeout(() => {
      setShowPath(true);
    }, 1000);
  }, []);
  const renderTripStartPoint = () => (
    <Marker
      coordinate={{
        latitude: tripDetails?.path[0]?.lat,
        longitude: tripDetails?.path[0]?.long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }}>
      <View style={styles.markerViewStyle}>
        <Text style={styles.txt}>Start</Text>
      </View>
    </Marker>
  );
  const renderTripEndPoint = () => (
    <Marker
      coordinate={{
        latitude: tripDetails?.path[tripDetails.path.length - 1]?.lat,
        longitude: tripDetails?.path[tripDetails.path.length - 1]?.long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }}>
      <View style={styles.markerViewStyle}>
        <Text style={styles.txt}>End</Text>
      </View>
    </Marker>
  );
  const renderPathPoints = () => (
    <>
      {tripDetails?.path?.map((item, index) => (
        <Marker
          key={index.toString()}
          coordinate={{
            latitude: item?.lat,
            longitude: item?.long,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}>
          <View style={styles.point} />
        </Marker>
      ))}
    </>
  );
  return (
    <SafeAreaLayout header={renderHeader()} style={styles.screen}>
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
          <MapView.Animated
            ref={mapRef}
            scrollEnabled
            zoomEnabled
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={{
              latitude: tripDetails?.path[0]?.lat,
              longitude: tripDetails?.path[0]?.long,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}>
            {showPath && renderPathPoints()}
            {renderTripStartPoint()}
            {renderTripEndPoint()}
          </MapView.Animated>
        </View>
      </ScrollView>
    </SafeAreaLayout>
  );
}
