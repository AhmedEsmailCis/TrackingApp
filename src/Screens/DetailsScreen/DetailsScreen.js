import React, { useEffect, useRef, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { ICON_TYPE, IMIcon, MainHeader, SafeAreaLayout, TripCard } from "../../Components";
import {
  CheckRunningFeels,
  GetFullDate,
  GetMapDirectionsData,
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
  const [showPath, setShowPath] = useState(false);
  const [MapDirectionsData, setMapDirectionsData] = useState(null);

  useEffect(() => {
    setMapDirectionsData(GetMapDirectionsData(tripDetails?.path));
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
  const renderMapDirection = () => (
    <>
      {MapDirectionsData?.map((item, index) => (
        <MapViewDirections
          key={index.toString()}
          strokeColor={COLORS.AppColor3}
          strokeWidth={2}
          mode="WALKING"
          origin={{
            latitude: item?.startLat,
            longitude: item?.startLong,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          destination={{
            latitude: item?.endLat,
            longitude: item?.endLong,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          apikey={GOOGLE_MAPS_APIKEY}
        />
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
          status={CheckRunningFeels(tripDetails?.distance, tripDetails?.time)}
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
            {MapDirectionsData && renderMapDirection()}
            {renderTripStartPoint()}
            {renderTripEndPoint()}
          </MapView.Animated>
        </View>
      </ScrollView>
    </SafeAreaLayout>
  );
}
