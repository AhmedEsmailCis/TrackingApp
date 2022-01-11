import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { navigate } from "../../Navigation/RootNavigation";
import styles from "./styles";

export function HomeScreen() {
  return (
    <View>
      <Text>Home Screen</Text>
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
