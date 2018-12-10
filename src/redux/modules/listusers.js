import { createAction, handleActions } from "redux-actions";
export const getUsers = createAction("users/get");
export const listUsers = createAction("users/list");

const defaultState = {
    users: []
};

export default handleActions(
    {
        [listUsers]: (state, { payload }) => {
            return {
                ...state,
                users: payload
            };
        }
    },

    defaultState
);
