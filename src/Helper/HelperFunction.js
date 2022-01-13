import React from "react";

export const timeConverter = (UnixTimestamp, onlyDate: false) => {
  const a = new Date(UnixTimestamp);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Mov",
    "Dec",
  ];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const day = a.getDate();
  const hour = a.getHours();
  const min = a.getMinutes();
  const sec = a.getSeconds();
  const time = `${day < 10 ? 0 : ""}${day} ${month} ${year} ${hour < 10 ? 0 : ""}${hour}:${
    min < 10 ? 0 : ""
  }${min}`;
  const date = `${day < 10 ? 0 : ""}${day} ${month} ${year} `;
  if (onlyDate) return date;
  return time;
};
export const secondsConverter = (numberOfSeconds) => {
  const hours = Math.floor(numberOfSeconds / 3600);
  let rest = numberOfSeconds % 3600;
  const minutes = Math.floor(rest / 60);
  rest %= 60;
  const seconds = rest;
  return `${hours < 10 ? 0 : ""}${hours}:${minutes < 10 ? 0 : ""}${minutes}:${
    seconds < 10 ? 0 : ""
  }${seconds}`;
};

export const calculateDistance = (numberOfSeconds) => {
  const hours = Math.floor(numberOfSeconds / 3600);
  let rest = numberOfSeconds % 3600;
  const minutes = Math.floor(rest / 60);
  rest %= 60;
  const seconds = rest;
  return `${hours < 10 ? 0 : ""}${hours}:${minutes < 10 ? 0 : ""}${minutes}:${
    seconds < 10 ? 0 : ""
  }${seconds}`;
};

export const getDistanceBtTwoCoordinate = (lat1, lon1, lat2, lon2) => {
  const radLat1 = (Math.PI * lat1) / 180;
  const radLat2 = (Math.PI * lat2) / 180;
  const theta = lon1 - lon2;
  const radTheta = (Math.PI * theta) / 180;
  let dist =
    Math.sin(radLat1) * Math.sin(radLat2) +
    Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);
  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515;
  dist *= 1.609344;

  return dist * 1000;
};
