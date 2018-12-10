import { createAction, handleActions } from "redux-actions";

export const loadAllplaces = createAction("location/loadAllplaces");
export const newGeolocation = createAction("location/newGeolocation");
export const maps = createAction("location/maps");
export const getCurrentLocs = createAction("location/getCurrentLoc");
export const getsubmitButton = createAction("location/getsubmitButton");
export const getPlaces = createAction("location/getPlaces");

const defaultState = {
    places: [],
    location: []
};

export default handleActions(
    {
        [loadAllplaces]: (state, { payload }) => ({
            ...state,
            places: payload
        }),
        [getCurrentLocs]: state => ({
            ...state
        })
    },
    defaultState
);
