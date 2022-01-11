import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { navigate } from "../../Navigation/RootNavigation";
import { updateTrips } from "../../Redux/Actions";
import styles from "./styles";

export function HomeScreen() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(updateTrips("hhhhhh"));
  // }, []);
  const x = useSelector((state) => state.tripsState.trips);
  return (
    <View>
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
    </View>
  );
}
