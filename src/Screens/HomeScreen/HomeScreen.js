import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { SafeAreaLayout } from "../../Components";
import { navigate } from "../../Navigation/RootNavigation";
import { updateTrips } from "../../Redux/Actions";
import styles from "./styles";
import { LATITUDE_DELTA, LONGITUDE_DELTA } from "../../Helper/Constants";

export function HomeScreen() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateTrips("lllll"));
  }, []);
  const x = useSelector((state) => state.tripsState.trips);
  return (
    <SafeAreaLayout>
      <Text>{x}</Text>
      <TouchableOpacity
        style={{ backgroundColor: "red" }}
        onPress={() => {
          navigate("HistoryScreen");
        }}>
        <Text>To History Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ backgroundColor: "blue" }}
        onPress={() => {
          navigate("DetailsScreen");
        }}>
        <Text>To Details Screen</Text>
      </TouchableOpacity>
      <View style={styles.mapContainer}>
        <MapView.Animated
          showsBuildings
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          followUserLocation
          initialRegion={{
            latitude: 30.12,
            longitude: 31.12,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          zoomEnabled
          zoomTapEnabled
          showsUserLocation
          showsMyLocationButton>
          <Marker.Animated
            coordinate={{
              latitude: 30.05701869162554,
              longitude: 31.422623642656294,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
          />
        </MapView.Animated>
      </View>
    </SafeAreaLayout>
  );
}
