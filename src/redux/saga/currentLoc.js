import { takeEvery, call, put } from "redux-saga/effects";
import { getCurrentLocs, setCurrentLoc } from "../modules/location";

function* getCurrentLocWorker() {
    try {
        let location = yield call(getLocation);
        yield put(setCurrentLoc(location));
    } catch (error) {
        console.error();
    }
}
const getLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
        let loc = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        return loc;
    });
};

export default function* getCurrentLocWatcher() {
    yield takeEvery(getCurrentLocs, getCurrentLocWorker);
}

// const getLocation = () =>
//     new Promise((resolve, reject) => {
//         navigator.geolocation.getCurrentPosition(
//             position => {
//                 let loc = {
//                     lat: position.coords.latitude,
//                     lng: position.coords.longitude
//                 };
//                 return resolve(loc);
//             },
//             error => reject(error)
//         );
//     });

// function* getCurrentLocWorker() {
//     try {
//         let location = yield call(getLocation);
//         yield put(setCurrentLoc(location));
//     } catch (error) {
//         console.error();
//     }
// }
// export default function* getCurrentLocWatcher() {
//     yield takeEvery(getCurrentLocs, getCurrentLocWorker);
// }
