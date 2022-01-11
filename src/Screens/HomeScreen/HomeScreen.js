import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { ICON_TYPE, IMIcon, MainHeader, SafeAreaLayout } from "../../Components";
import { navigate } from "../../Navigation/RootNavigation";
import styles from "./styles";
import { GOOGLE_MAPS_APIKEY, LATITUDE_DELTA, LONGITUDE_DELTA } from "../../Helper/Constants";
import { COLORS, wp } from "../../Styles";

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
  return (
    <SafeAreaLayout header={renderHeader()}>
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
            latitude: 30.05701869162554,
            longitude: 31.422623642656294,
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
          <MapViewDirections
            strokeColor={COLORS.AppColor1}
            strokeWidth={3}
            mode="WALKING"
            origin={{
              latitude: 30.05701869162554,
              longitude: 31.422623642656294,
              latitudeDelta: 0.00994052098169007,
              longitudeDelta: 0.007621161639693952,
            }}
            destination={{
              latitude: 30.15701869162554,
              longitude: 31.5,
              latitudeDelta: 0.00994052098169007,
              longitudeDelta: 0.007621161639693952,
            }}
            apikey={GOOGLE_MAPS_APIKEY}
          />
        </MapView.Animated>
      </View>
    </SafeAreaLayout>
  );
}
