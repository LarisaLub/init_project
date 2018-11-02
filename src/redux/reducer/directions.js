import { DIRECTIONS } from "../reducer/../constants";

const defaultState = {
    maps: null
};

export default (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case DIRECTIONS:
            return {
                ...state,
                directions: payload
            };
        default:
            return state;
    }
};
