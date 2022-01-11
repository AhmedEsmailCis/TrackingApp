import { TESTS } from "../Type";

const INITIAL_STATE = {
  trips: "ahmed",
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case TESTS:
      return {
        ...state,
        trips: action.payload,
      };

    default:
      return state;
  }
};
