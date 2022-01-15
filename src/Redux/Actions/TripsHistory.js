import { INSERT_NEW_TRIP, REMOVE_FROM_HISTORY } from "../Type";

export const InsertNewTrips = (payload) => {
  return {
    type: INSERT_NEW_TRIP,
    payload,
  };
};
export const RemoveTrip = (payload) => {
  return {
    type: REMOVE_FROM_HISTORY,
    payload,
  };
};
