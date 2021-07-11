import { userActionTypes } from "./user.types";

const INITITAL_STATE = {
  currentUser: {},
};

export const userReducer = (state = INITITAL_STATE, action) => {
  console.log("USER-ACTION-OBJECT:", action);
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
