import React from "react";

export const TimeFormat = (numberOfSeconds) => {
  const hours = Math.floor(numberOfSeconds / 3600);
  let rest = numberOfSeconds % 3600;
  const minutes = Math.floor(rest / 60);
  rest %= 60;
  const seconds = rest;
  return `${hours < 10 ? 0 : ""}${hours}:${minutes < 10 ? 0 : ""}${minutes}:${
    seconds < 10 ? 0 : ""
  }${seconds}`;
};
