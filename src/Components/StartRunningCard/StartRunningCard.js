import React from "react";
import { View, Text } from "react-native";
import { RoundButton } from "..";
import styles from "./styles";

export function StartRunningCard({ onStartPress }) {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Start Running</Text>
      <RoundButton type="start" onPress={onStartPress} disabled={false} />
    </View>
  );
}
