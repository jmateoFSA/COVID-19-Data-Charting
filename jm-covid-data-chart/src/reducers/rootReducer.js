import { combineReducers } from "redux";
import statesReducer from "./statesReducer";

const rootReducer = combineReducers({
  statesData: statesReducer
})

export default rootReducer
