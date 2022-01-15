import React from "react";

export const GetMapDirectionsData = (pathsData) => {
  const { length } = pathsData;
  let startPoint = pathsData[0];
  const MapDirectionsData = [];
  for (let i = 1; i < length; i++) {
    if (pathsData[i]?.pause) {
      MapDirectionsData.push({
        startLat: startPoint?.lat,
        startLong: startPoint?.long,
        endLat: pathsData[i]?.lat,
        endLong: pathsData[i]?.long,
      });
      if (i < length - 1) startPoint = pathsData[i + 1];
    }
  }
  return MapDirectionsData;
};
