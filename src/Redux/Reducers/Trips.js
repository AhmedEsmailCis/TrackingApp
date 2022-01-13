import { INSERT_NEW_TRIP } from "../Type";

const INITIAL_STATE = {
  trips: [],
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case INSERT_NEW_TRIP:
      return {
        ...state,
        trips: [action.payload, ...state.trips],
      };

    default:
      return state;
  }
};
