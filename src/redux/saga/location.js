import { takeEvery, put } from "redux-saga/effects";
import { loadAllplaces, getPlaces } from "../modules/location";
import axios from "axios";
import { URL_1 } from "../constants";

function* locationWorker() {
    try {
        const placesResponse = yield axios(URL_1);

        yield put(loadAllplaces(placesResponse.data.results.items));
    } catch (error) {}
}

export default function* locationWatcher() {
    yield takeEvery(getPlaces, locationWorker);
}
