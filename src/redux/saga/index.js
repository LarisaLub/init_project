import { all } from "redux-saga/effects";
import authorization from "./authorization";
import listUsers from "./listUsers";
import location from "./location";
import currentLoc from "./currentLoc";

export default function* rootSaga() {
    yield all([authorization(), listUsers(), location(), currentLoc()]);
}
