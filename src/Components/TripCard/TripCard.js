import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ICON_TYPE, IMIcon } from "..";
import { COLORS, wp } from "../../Styles";
import styles from "./styles";

export function TripCard({
  date,
  time,
  steps,
  distance,
  status, // walking superFast running
  onPress,
}) {
  const WALKING = "walking";
  const SUPER_FAST = "superFast";
  const RUNNING = "running";
  const determineStatus = () => {
    if (status === WALKING) return "Walking";
    if (status === SUPER_FAST) return "Super Fast";
    if (status === RUNNING) return "Running";
  };

  const determineIconName = () => {
    if (status === WALKING) return "walk";
    if (status === SUPER_FAST) return "run-fast";
    if (status === RUNNING) return "run";
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.rowBtStatusDate}>
        <View style={styles.rowBtIconStatus}>
          <View style={styles.wrapIcon}>
            <IMIcon
              origin={ICON_TYPE.MATERIAL_COMMUNITY}
              name={determineIconName()}
              color={COLORS.AppColor1}
              size={wp(15)}
            />
          </View>
          <Text style={styles.status}>{determineStatus()}</Text>
        </View>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.rowBtThreeDetails}>
        <View style={styles.rowBtLabelResult}>
          <Text style={styles.label}>Time : </Text>
          <Text style={styles.result}>{time}</Text>
        </View>
        <View style={styles.rowBtLabelResult}>
          <Text style={styles.label}>Steps : </Text>
          <Text style={styles.result}>{steps}</Text>
        </View>
        <View style={styles.rowBtLabelResult}>
          <Text style={styles.label}>Distance : </Text>
          <Text style={styles.result}>{distance} m</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
