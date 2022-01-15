import { INSERT_NEW_TRIP, REMOVE_FROM_HISTORY } from "../Type";

const INITIAL_STATE = {
  trips: [],
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case INSERT_NEW_TRIP:
      return {
        ...state,
        trips: [{ ...action.payload, id: (state.trips[0]?.id || 0) + 1 }, ...state.trips],
      };
    case REMOVE_FROM_HISTORY:
      return {
        trips: state.trips.filter((i) => i?.id !== action.payload),
      };
    default:
      return state;
  }
};
