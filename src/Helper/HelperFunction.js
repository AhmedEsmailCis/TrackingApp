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
