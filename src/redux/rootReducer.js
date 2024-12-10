import groupFlightReducer from "./slices/groupFlightSlice";
const { combineReducers } = require("@reduxjs/toolkit");

const appReducer = combineReducers({
  groupFlight: groupFlightReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "auth/logout") state = {};
  return appReducer(state, action);
};

export default rootReducer;
