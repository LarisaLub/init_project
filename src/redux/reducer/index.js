import { combineReducers } from "redux";
import places from "./places";
import maps from "./maps";
import authorization from "../modules/authorization";
import listusers from "../modules/listusers";
import location from "../modules/location";

export default combineReducers({
    places,
    maps,
    authorization,
    listusers,
    location
});
