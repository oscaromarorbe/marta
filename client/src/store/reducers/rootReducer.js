import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import navReducer from "./navReducer";
import itineraryReducer from "./ItineraryReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  cities: citiesReducer,
  nav: navReducer,
  itineraries: itineraryReducer,
  user: userReducer
});
export default rootReducer;