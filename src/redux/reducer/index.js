import { combineReducers } from "redux";
import plases from "./plases";
import maps from "./maps";
import newgeolocation from "./newgeolocatin";
import register from "./register";
export default combineReducers({
    plases,
    maps,
    newgeolocation,
    register
});
