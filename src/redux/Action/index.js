import { LOAD_ALL_PLASES, MAPS } from "../Action/../constants";

export const loadAllplases = () => {
    return dispatch => {
        fetch(
            "https://places.demo.api.here.com/places/v1/discover/search?at=50.4501%2C30.5234&q=restaurant&app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg"
        )
            .then(res => {
                return res.json();
            })
            .then(response =>
                dispatch({
                    type: LOAD_ALL_PLASES,
                    payload: response
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
