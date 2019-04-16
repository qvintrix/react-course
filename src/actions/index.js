import {getFilm, getFilms} from "../utils/fetch-data";

/*
 * action types
 */

export const FETCH_FILMS_REQUEST = 'FETCH_FILMS_REQUEST';
export const FETCH_FILMS_SUCCESS = 'FETCH_FILMS_SUCCESS';
export const FETCH_FILMS_FAILURE = 'FETCH_FILMS_FAILURE';

export const FETCH_FILM_REQUEST = 'FETCH_FILM_REQUEST';
export const FETCH_FILM_SUCCESS = 'FETCH_FILM_SUCCESS';
export const FETCH_FILM_FAILURE = 'FETCH_FILM_FAILURE';
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

const filmRequested = () => {
    return {
        type: FETCH_FILM_REQUEST
    };
};

const filmLoaded = (film) => {
    return {
        type: FETCH_FILM_SUCCESS,
        payload: film
    };
};

const filmError = (error) => {
    return {
        type: FETCH_FILM_FAILURE,
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

const fetchFilm = (id) => (dispatch) => {
    dispatch(filmRequested());
    getFilm(id)
        .then(data => data.json())
        .then((res) => dispatch(filmLoaded(res)))
        .catch((err) => dispatch(filmError(err)));
};

export {
    fetchFilms,
    fetchFilm
};
