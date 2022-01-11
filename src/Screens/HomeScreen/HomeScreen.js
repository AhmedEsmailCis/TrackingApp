import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { SafeAreaLayout } from "../../Components";
import { navigate } from "../../Navigation/RootNavigation";
import { updateTrips } from "../../Redux/Actions";
import styles from "./styles";

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
    </SafeAreaLayout>
  );
}
