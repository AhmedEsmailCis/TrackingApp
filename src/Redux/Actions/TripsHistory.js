import { INSERT_NEW_TRIP } from "../Type";

export const InsertNewTrips = (payload) => {
  return {
    type: INSERT_NEW_TRIP,
    payload,
  };
};
