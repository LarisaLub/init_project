import {
    LOAD_ALL_PLASES,
    MAPS,
    NEW_GEOLOCATION,
    GET_CURRENT_LOC
} from "../Action/../constants";
import { put, call } from "redux-saga/effects";

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

export function* sagaGetCurrentLoc() {
    try {
        const location = yield call(() => {
            return navigator.geolocation.getCurrentPosition(position => {
                return {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
            });
        });
        console.log("loc");
        console.log(location);
        yield put(getCurrentLoc(location));
    } catch (error) {}
}

export const getCurrentLoc = getCurrentLoc => {
    return {
        type: GET_CURRENT_LOC,
        payload: getCurrentLoc
    };
};

// const loginRequest = function loginRequest({ email, password }) {
//     return {
//         type: LOGIN_REQUESTING,
//         email,
//         password
//     };
// };

// export default loginRequest;
