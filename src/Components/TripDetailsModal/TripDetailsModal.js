import React, { useState, useEffect } from "react";
import { Alert, Modal, Text, View } from "react-native";
import { RoundButton } from "..";
import { TimeFormat, getDistanceBtTwoCoordinate } from "../../Helper";

import { navigate } from "../../Navigation/RootNavigation";
import styles from "./styles";

export function TripDetailsModal({ modalVisible, setModalVisible, liveLat, liveLong }) {
  const [pause, setPause] = useState(false);
  const [counterTime, setCounterTime] = useState(1);
  const [saveDate, setSaveDate] = useState(null);
  const [pathData, setPathData] = useState([]);
  const [cumulativeDistance, setCumulativeDistance] = useState(0);
  useEffect(() => {
    if (modalVisible) {
      onStartTrip();
    }
  }, [modalVisible]);
  useEffect(() => {
    if (modalVisible && !pause) {
      setTimeout(() => {
        setCounterTime((c) => c + 1);
      }, 1000);
    }
    if (pause) {
      pathData.push({
        lat: liveLat,
        long: liveLong,
        pause: true,
      });
    }
  }, [counterTime, pause]);
  useEffect(() => {
    if (modalVisible && !pause) {
      pushNewPath();
    }
  }, [liveLat, liveLong]);
  const pushNewPath = () => {
    const { length } = pathData;
    const previousPathItem = pathData[length - 1];
    if (!previousPathItem?.pause) {
      setCumulativeDistance(
        (d) =>
          d +
          getDistanceBtTwoCoordinate(
            liveLat,
            liveLong,
            previousPathItem?.lat,
            previousPathItem?.long,
          ),
      );
    }
    pathData.push({
      lat: liveLat,
      long: liveLong,
      pause,
    });
  };
  const onStartTrip = () => {
    setCounterTime(0);
    setCumulativeDistance(0);
    setPathData([
      {
        lat: liveLat,
        long: liveLong,
        pause: false,
      },
    ]);
    setSaveDate(new Date());
  };
  const onPausePress = () => {
    setPause(true);
  };
  const onPlayPress = () => {
    setPause(false);
  };
  const onStopPress = () => {
    setModalVisible(false);
    setPause(false);
    setPathData([]);
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
        <Text style={styles.txt}>{TimeFormat(counterTime)}</Text>
        <View style={styles.rowBtThreeDetails}>
          <View style={styles.rowBtLabelResult}>
            <Text numberOfLines={1} style={styles.label}>
              Distance :
            </Text>
            <Text numberOfLines={1} style={styles.result}>
              {cumulativeDistance?.toFixed(2)} m
            </Text>
          </View>
          <View style={styles.rowBtLabelResult}>
            <Text numberOfLines={1} style={styles.label}>
              Steps :
            </Text>
            <Text numberOfLines={1} style={styles.result}>
              {0}
            </Text>
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
