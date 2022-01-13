import React, { useState } from "react";
import { Alert, Modal, Text, View } from "react-native";
import { RoundButton } from "..";
import { navigate } from "../../Navigation/RootNavigation";
import styles from "./styles";

export function TripDetailsModal({ modalVisible, setModalVisible, liveLat, liveLong }) {
  const [pause, setPause] = useState(false);
  const onPausePress = () => {
    setPause(true);
  };
  const onPlayPress = () => {
    setPause(false);
  };
  const onStopPress = () => {
    setModalVisible(false);
    setPause(false);
    navigate("HistoryScreen");
  };
  return (
    <Modal
      animationType="slide"
      transparent
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        // setModalVisible(!modalVisible);
      }}>
      <View style={styles.modalView}>
        <Text style={styles.txt}>00:00:00</Text>
        <View style={styles.rowBtThreeDetails}>
          <View style={styles.rowBtLabelResult}>
            <Text style={styles.label}>Steps : </Text>
            <Text style={styles.result}>{0}</Text>
          </View>
          <View style={styles.rowBtLabelResult}>
            <Text style={styles.label}>Distance : </Text>
            <Text style={styles.result}>{0} m</Text>
          </View>
        </View>
        <View style={styles.rowBtBttns}>
          {pause ? (
            <>
              <RoundButton type="stop" disabled={false} onPress={onStopPress} />
              <RoundButton type="start" disabled={false} onPress={onPlayPress} />
            </>
          ) : (
            <RoundButton type="pause" disabled={false} onPress={onPausePress} />
          )}
        </View>
      </View>
    </Modal>
  );
}
