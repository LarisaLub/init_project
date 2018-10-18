import { LOAD_ALL_BOOKS } from "../constants";
import { LOAD_ALL_ARTICLES } from "../constants";

export const book = loadAllbook => {
    return dispatch => {
        dispatch({
            type: LOAD_ALL_BOOKS,
            payload: book
        });

        fetch(`https://www.googleapis.com/books/v1/volumes?q=толстой`)
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

export const loadAllArticles = loadAllArticles => {
    return {
        type: LOAD_ALL_ARTICLES,
        payload: loadAllArticles
    };
};
