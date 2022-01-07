import { combineReducers } from "redux";
import statesReducer from "./statesReducer";

const rootReducer = combineReducers({
  states: statesReducer
})

export default rootReducer
