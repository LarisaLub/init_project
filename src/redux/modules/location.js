import { createAction, handleActions } from "redux-actions";
export const loadAllplaces = createAction("location/loadAllplaces");
export const newGeolocation = createAction("location/newGeolocation");
export const maps = createAction("location/maps");
export const getCurrentLocs = createAction("location/getCurrentLoc");
export const getsubmitButton = createAction("location/getsubmitButton");
export const getPlaces = createAction("location/getPlaces");
export const setActiveLocation = createAction("activeLocation/setActive");
export const setCurrentLoc = createAction("location/setCurrentLoc");

const defaultState = {
    places: [],
    location: [],
    currentPosition: { lat: 0, lng: 0 },
    activeLocation: { lat: 0, lng: 0 }
};

export default handleActions(
    {
        [setCurrentLoc]: (state, { payload }) => ({
            ...state,
            currentPosition: payload
        }),
        [loadAllplaces]: (state, { payload }) => ({
            ...state,
            places: payload
        }),
        [setActiveLocation]: (state, { payload }) => ({
            ...state,
            activeLocation: payload
        })
    },
    defaultState
);
