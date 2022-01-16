import React from "react";
import { TouchableOpacity } from "react-native";
import { ICON_TYPE, IMIcon } from "..";
import styles from "./styles";

export function RoundButton({ type, onPress, disabled }) {
  const START = "start";
  const PAUSE = "pause";
  const STOP = "stop";
  const determineIconName = () => {
    if (type === START) return "play";
    if (type === PAUSE) return "pause";
    if (type === STOP) return "stop";
  };
  return (
    <TouchableOpacity
      testID="startBtn"
      activeOpacity={0.7}
      style={styles.Bttn}
      disabled={disabled}
      onPress={onPress}>
      <IMIcon origin={ICON_TYPE.FONT_AWESOME} name={determineIconName()} color="white" size={15} />
    </TouchableOpacity>
  );
}
