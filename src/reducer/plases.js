import { LOAD_ALL_PLASES } from "../constants";

const defaultState = {
    plases: null
};

export default (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOAD_ALL_PLASES:
            return {
                ...state,
                plases: payload.results.items
            };
        default:
            return state;
    }
};
