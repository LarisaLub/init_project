import { LOAD_ALL_BOOKS } from "../constants";

const defaultState = {
    books: null
};

export default (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOAD_ALL_BOOKS:
            return {
                ...state,
                books: payload
            };
        default:
            return state;
    }
};
