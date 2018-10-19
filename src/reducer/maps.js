import { MAPS } from "../constants";

const defaultState = {
    maps: null
};

export default (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case MAPS:
            return {
                ...state,
                maps: payload
            };
        default:
            return state;
    }
};
