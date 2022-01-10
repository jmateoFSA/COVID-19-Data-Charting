import { combineReducers } from "redux";
import statesReducer from "./statesReducer";
import globalReducer from "./globalReducer";

const rootReducer = combineReducers({
  statesData: statesReducer,
  globalData: globalReducer
})

export default rootReducer
