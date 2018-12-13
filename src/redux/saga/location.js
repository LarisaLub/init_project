import { takeEvery, call, put } from "redux-saga/effects";
import { loadAllplaces, getPlaces } from "../modules/location";
import axios from "axios";

function* locationWorker() {
    try {
        const placesResponse = yield axios(
            "https://places.demo.api.here.com/places/v1/discover/search?at=50.4501%2C30.5234&q=restaurant&app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg"
        );

        yield put(loadAllplaces(placesResponse.data.results.items));
        // yield call(getCurrentLocWorker);
    } catch (error) {}
}

export default function* locationWatcher() {
    yield takeEvery(getPlaces, locationWorker);
}
