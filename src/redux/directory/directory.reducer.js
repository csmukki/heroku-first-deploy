import { directoryActionTypes } from "./directory.types";

const INITIAL_STATE = {
  sections: [],
};

export const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case directoryActionTypes.UPDATE_SECTIONS:
      return {
        ...state,
        sections: action.payload,
      };
    default:
      return state;
  }
};
