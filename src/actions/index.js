import {getFilms} from "../utils/fetch-data";

/*
 * action types
 */

export const FETCH_FILMS_REQUEST = 'FETCH_FILMS_REQUEST';
export const FETCH_FILMS_SUCCESS = 'FETCH_FILMS_SUCCESS';
export const FETCH_FILMS_FAILURE = 'FETCH_FILMS_FAILURE';

/*
 * action creators
 */

const filmsRequested = () => {
    return {
        type: FETCH_FILMS_REQUEST
    };
};

const filmsLoaded = (newFilms) => {
    return {
        type: FETCH_FILMS_SUCCESS,
        payload: newFilms
    };
};

const filmsError = (error) => {
    return {
        type: FETCH_FILMS_FAILURE,
        payload: error
    };
};


const fetchFilms = () => (dispatch) => {
    dispatch(filmsRequested());
    getFilms()
        .then(data => data.json())
        .then((res) => dispatch(filmsLoaded(res.data)))
        .catch((err) => dispatch(filmsError(err)));
};

export {
    fetchFilms
};
