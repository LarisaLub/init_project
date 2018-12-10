import { all } from "redux-saga/effects";
import authorization from "./authorization";
import listusers from "./listusers";
import location from "./location";

export default function* rootSaga() {
    yield all([authorization(), listusers(), location()]);
}
