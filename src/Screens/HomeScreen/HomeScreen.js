import React, { useEffect, useState, useRef } from "react";
import { Text, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import FastImage from "react-native-fast-image";
import {
  ICON_TYPE,
  IMIcon,
  MainHeader,
  SafeAreaLayout,
  StartRunningCard,
  TripDetailsModal,
} from "../../Components";
import { navigate } from "../../Navigation/RootNavigation";
import styles from "./styles";
import { LATITUDE_DELTA, LONGITUDE_DELTA } from "../../Helper/Constants";
import { COLORS, IMAGES, wp } from "../../Styles";
import { checkAndRequestLocationPermission } from "../../Helper/permissions";

export function HomeScreen() {
  const rightIcon = () => (
    <View style={styles.rowBtLeftIconLeftTitle}>
      <IMIcon
        origin={ICON_TYPE.FONT_AWESOME5}
        name="history"
        size={wp(12)}
        color={COLORS.AppColor1}
      />
      <Text style={styles.leftHeaderTitle}>History</Text>
    </View>
  );
  const renderHeader = () => (
    <MainHeader
      title="Home"
      rightIcon={rightIcon}
      onRightIconPress={() => {
        navigate("HistoryScreen");
      }}
    />
  );

  // const requestLocationPermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //       {
  //         title: "4GO",
  //         message:
  //           "4GO uses location service for delivery " +
  //           "and only while you are using the application",
  //       },
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       // console.log("You can use the location");
  //       // calculationRegion();
  //     } else {
  //       console.log("location permission denied");
  //     }
  //   } catch (err) {
  //     // console.warn(err);
  //     requestLocationPermission();
  //   }
  // };
  //--------------------------------------------------------------------
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [latState, setLatState] = useState();
  const [longState, setLongState] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    checkAndRequestLocationPermission();
  }, []);
  useEffect(() => {
    if (latState && longState) {
      mapRef?.current?.animateToRegion(
        {
          latitude: latState,
          longitude: longState,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        },
        3000,
      );
      setTimeout(
        () =>
          markerRef?.current?.animateMarkerToCoordinate(
            { latitude: latState, longitude: longState },
            5000,
          ),
        1000,
      );
    }
  }, [latState, longState]);
  const onUserLocationChange = async (e) => {
    console.log(JSON.stringify(e.nativeEvent.coordinate, null, 2));
    const { latitude, longitude, heading, speed } = e?.nativeEvent?.coordinate;
    if (latitude && longitude && heading) {
      setLatState(latitude);
      setLongState(longitude);
    }
  };

  return (
    <SafeAreaLayout header={renderHeader()}>
      <View style={styles.mapContainer}>
        <MapView.Animated
          ref={mapRef}
          showsBuildings
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          followUserLocation
          initialRegion={{
            latitude: 30.05701869162554,
            longitude: 31.422623642656294,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          zoomEnabled
          zoomTapEnabled
          showsUserLocation
          showsMyLocationButton
          //------------
          onUserLocationChange={onUserLocationChange}>
          <Marker.Animated
            ref={markerRef}
            coordinate={{
              latitude: 30.05701869162554,
              longitude: 31.422623642656294,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}>
            <FastImage source={IMAGES.marker} style={styles.marker} resizeMode="contain" />
          </Marker.Animated>
        </MapView.Animated>
      </View>
      <StartRunningCard
        onStartPress={() => {
          setModalVisible(true);
        }}
      />
      <TripDetailsModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        liveLat={latState}
        liveLong={longState}
      />
    </SafeAreaLayout>
  );
}
