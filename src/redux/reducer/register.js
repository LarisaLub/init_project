import { REGISTER } from "../reducer/../constants";

const defaultState = {
    maps: null
};

export default (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case REGISTER:
            return {
                ...state,
                maps: payload
            };
        default:
            return state;
    }
};
