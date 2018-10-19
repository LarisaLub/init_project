import { LOAD_ALL_BOOKS, MAPS } from "../constants";

export const loadAllbook = () => {
    return dispatch => {
        fetch(
            `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`
        )
            .then(res => {
                return res.json();
            })
            .then(response =>
                dispatch({
                    type: LOAD_ALL_BOOKS,
                    payload: response.items
                })
            );
    };
};

export const maps = maps => {
    return {
        type: MAPS,
        payload: maps
    };
};
