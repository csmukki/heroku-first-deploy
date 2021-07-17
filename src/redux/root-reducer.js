import { combineReducers } from "redux";

import { directoryReducer } from "./directory/directory.reducer";

export default combineReducers({
  directory: directoryReducer,
});
