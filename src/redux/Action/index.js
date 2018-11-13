import {
    LOAD_ALL_PLASES,
    MAPS,
    LOGIN_REQUESTING,
    NEW_GEOLOCATION
} from "../Action/../constants";
import { put, call } from "redux-saga/effects";
import { takeLatest } from "redux-saga/effects";

// export const loadAllplases = () => {
//     return dispatch => {
//         fetch(
//             "https://places.demo.api.here.com/places/v1/discover/search?at=50.4501%2C30.5234&q=restaurant&app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg"
//         )
//             .then(res => {
//                 return res.json();
//             })
//             .then(response =>
//                 dispatch({
//                     type: LOAD_ALL_PLASES,
//                     payload: response
//                 })
//             );
//     };
// };

export function* saga() {
    try {
        const plases = yield call(() => {
            return fetch(
                "https://places.demo.api.here.com/places/v1/discover/search?at=50.4501%2C30.5234&q=restaurant&app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg"
            )
                .then(res => res.json())
                .then(res => res.results);
        });
        console.log("plases");
        console.log(plases);
        yield put(loadAllplases(plases));
    } catch (error) {}
}

export const maps = maps => {
    return {
        type: MAPS,
        payload: maps
    };
};

export const loadAllplases = loadAllplases => {
    return {
        type: LOAD_ALL_PLASES,
        payload: loadAllplases
    };
};

export const newGeolocation = newGeolocation => {
    return {
        type: NEW_GEOLOCATION,
        payload: newGeolocation
    };
};

export function* sagaGeo() {
    try {
        const location = yield call(() => {
            return fetch(
                "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            )
                .then(res => res.json())
                .then(res => res.latLng);
        });
        console.log("location");
        console.log(location);
        yield put(newGeolocation(location));
    } catch (error) {}
}

const loginRequest = function loginRequest({ email, password }) {
    return {
        type: LOGIN_REQUESTING,
        email,
        password
    };
};

export default loginRequest;
