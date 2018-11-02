import { combineReducers } from "redux";
import directions from "./directions";
import plases from "./plases";
import maps from "./maps";

export default combineReducers({
    plases,
    maps,
    directions
});
