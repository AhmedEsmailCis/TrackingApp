import React, { useState, useEffect } from "react";
import { Alert, Modal, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { RoundButton } from "..";
import {
  TimeFormat,
  getDistanceBtTwoCoordinate,
  NORMAL_STEP_NUMBER_PER_METERS,
} from "../../Helper";
import { navigate } from "../../Navigation/RootNavigation";
import { InsertNewTrips } from "../../Redux/Actions";
import styles from "./styles";

export function TripDetailsModal({ modalVisible, setModalVisible, liveLat, liveLong }) {
  const [pause, setPause] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());
  const [pathData, setPathData] = useState([]);
  const [cumulativeDistance, setCumulativeDistance] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    if (modalVisible) {
      onStartTrip();
    }
  }, [modalVisible]);
  useEffect(() => {
    if (modalVisible && !pause) {
      setTimeout(() => {
        setCurrentDate(new Date());
      }, 1000);
    }
  }, [currentDate, pause]);
  useEffect(() => {
    if (pause) {
      pathData.push({
        lat: liveLat,
        long: liveLong,
        pause: true,
      });
    }
  }, [pause]);
  useEffect(() => {
    if (modalVisible && !pause) {
      pushNewPath();
    }
  }, [liveLat]);
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
    setCumulativeDistance(0);
    setPathData([
      {
        lat: liveLat,
        long: liveLong,
        pause: false,
      },
    ]);
    setStartDate(new Date());
    setCurrentDate(new Date());
  };
  const onPausePress = () => {
    setPause(true);
  };
  const onPlayPress = () => {
    setPause(false);
  };
  const onStopPress = () => {
    dispatch(
      InsertNewTrips({
        date: startDate,
        time: Math.abs((currentDate.getTime() - startDate.getTime()) / 1000),
        steps: Math.floor(NORMAL_STEP_NUMBER_PER_METERS * cumulativeDistance).toFixed(0),
        distance: cumulativeDistance,
        path: pathData,
      }),
    );
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
        <Text style={styles.txt}>
          {TimeFormat(Math.abs((currentDate.getTime() - startDate.getTime()) / 1000))}
        </Text>
        <View style={styles.rowBtThreeDetails}>
          <View style={styles.rowBtLabelResult}>
            <Text numberOfLines={1} style={styles.label}>
              Distance :
            </Text>
            <Text numberOfLines={1} style={styles.result}>
              {" "}
              {cumulativeDistance?.toFixed(2)} m
            </Text>
          </View>

          <View style={styles.rowBtLabelResult}>
            <Text numberOfLines={1} style={styles.label}>
              Steps :
            </Text>
            <Text numberOfLines={1} style={styles.result}>
              {" "}
              {Math.floor(1.31 * cumulativeDistance).toFixed(0)}
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
