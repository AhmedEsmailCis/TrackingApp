import React from "react";
import {
  MAX_RUNNING_SPEED,
  MIN_RUNNING_SPEED,
  MIN_WALKING_SPEED,
  RUNNING,
  STANDING,
  SUPER_FAST,
  WALKING,
} from ".";

export const CheckRunningFeels = (cumulativeDistance, numberOfSeconds) => {
  const speed = cumulativeDistance / numberOfSeconds; // meter per seconds
  if (speed >= MAX_RUNNING_SPEED) return SUPER_FAST;
  if (speed >= MIN_RUNNING_SPEED && speed < MAX_RUNNING_SPEED) return RUNNING;
  if (speed >= MIN_WALKING_SPEED && speed < MIN_RUNNING_SPEED) return WALKING;
  if (speed < MIN_WALKING_SPEED) return STANDING;
};
