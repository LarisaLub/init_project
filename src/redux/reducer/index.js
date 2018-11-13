import { combineReducers } from "redux";
import plases from "./plases";
import maps from "./maps";
import newgeolocation from "./newgeolocatin";
export default combineReducers({
    plases,
    maps,
    newgeolocation
});
