import React from "react";
import { View, Text } from "react-native";
import FastImage from "react-native-fast-image";
import styles from "./styles";

export function EmptyContainer({ image, title, style }) {
  return (
    <View style={[styles.container, style]}>
      <FastImage source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
