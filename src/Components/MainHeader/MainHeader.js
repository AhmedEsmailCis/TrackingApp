import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export function MainHeader({
  title,
  leftIcon,
  onLeftIconPress,
  rightIcon,
  onRightIconPress,
  style,
  titleStyle,
  leftBttnStyle,
  rightBttnStyle,
}) {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        disabled={!onLeftIconPress}
        style={[styles.leftBttn, leftBttnStyle]}
        onPress={onLeftIconPress}>
        {leftIcon && leftIcon()}
      </TouchableOpacity>
      <Text numberOfLines={2} style={[styles.title, titleStyle]}>
        {title}
      </Text>
      <TouchableOpacity
        disabled={!onRightIconPress}
        style={[styles.rightBttn, rightBttnStyle]}
        onPress={onRightIconPress}>
        {rightIcon && rightIcon()}
      </TouchableOpacity>
    </View>
  );
}
