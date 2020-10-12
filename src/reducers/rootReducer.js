import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { calendarReducer } from "./calendarReducer";
import { uiReducers } from "./uiReducer";

export const rootReducer = combineReducers({
  ui: uiReducers,
  calendar: calendarReducer,
  auth: authReducer,
  // todo calendarReducer
});
