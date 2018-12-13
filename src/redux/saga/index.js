import { all } from "redux-saga/effects";
import authorization from "./authorization";
import listusers from "./listusers";
import location from "./location";
import currentLoc from "./currentLoc";

export default function* rootSaga() {
    yield all([authorization(), listusers(), location(), currentLoc()]);
}
