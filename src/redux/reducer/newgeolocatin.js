import { NEW_GEOLOCATION } from "../reducer/../constants";

const defaultState = {
    plases: null
};

export default (state = defaultState, action) => {
    const { type, payload } = action;
    console.log("payload2");
    console.log(payload);
    switch (type) {
        case NEW_GEOLOCATION:
            return {
                ...state,
                newgeolocation: payload.plases
            };
        default:
            return state;
    }
};
