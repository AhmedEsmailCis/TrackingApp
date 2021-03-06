import React from "react";

export const GetFullDate = (UnixTimestamp) => {
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

  return time;
};
