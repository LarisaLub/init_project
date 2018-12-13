import { LOAD_ALL_PLACES } from "../reducer/../constants";

const defaultState = {
    places: null,
    activeLocation: null
};

export default (state = defaultState, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_ALL_PLACES:
            return {
                ...state,
                places: payload.items
            };
        // case SET_ACTIVE_LOCATION:
        //     return {
        //         ...state,

        //         activeLocation: payload
        //     };
        default:
            return state;
    }
};
