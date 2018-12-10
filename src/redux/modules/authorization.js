import { createAction, handleActions } from "redux-actions";

export const loginSubmit = createAction("authorization/submit");
export const logoutSuccess = createAction("authorization/logout");
export const loginSuccess = createAction("authorization/success");

const defaultState = {
    loggedIn: false,
    token: ""
};

export default handleActions(
    {
        [loginSuccess]: (state, { payload }) => ({
            ...state,
            token: payload,
            loggedIn: true
        }),
        [logoutSuccess]: state => ({
            ...state,
            token: "",
            loggedIn: false
        })
    },
    defaultState
);
