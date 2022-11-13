import { combineReducers } from "redux";
import filterReducer from "./filters-reducer";
import positionReducer from "./position-reducer";

const rootReducer = combineReducers({
  positions: positionReducer,
  filters: filterReducer,
});

export default rootReducer;
