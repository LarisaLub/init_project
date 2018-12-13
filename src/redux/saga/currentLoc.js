import { takeEvery, call, put } from "redux-saga/effects";
import { getCurrentLocs, setCurrentLoc } from "../modules/location";

function myAsyncFunction(url) {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(position => {
            console.log("saga position", position);
            return {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
        });
    });
}

function* getCurrentLocWorker() {
    console.log("getCurrentLocWorker");
    try {
        let location = yield myAsyncFunction();
        yield put(setCurrentLoc(location));
        console.log("saga location", location);
    } catch (error) {
        console.log(error, "error saga");
    }
}
export default function* getCurrentLocWatcher() {
    yield takeEvery(getCurrentLocs, getCurrentLocWorker);
}
