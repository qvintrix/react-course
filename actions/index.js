import { getFilm, getFilms } from '../utils/fetch-data';

/*
 * action types
 */

export const FETCH_FILMS_REQUEST = 'FETCH_FILMS_REQUEST';
export const FETCH_FILMS_SUCCESS = 'FETCH_FILMS_SUCCESS';
export const FETCH_FILMS_FAILURE = 'FETCH_FILMS_FAILURE';

export const FETCH_FILM_REQUEST = 'FETCH_FILM_REQUEST';
export const FETCH_FILM_SUCCESS = 'FETCH_FILM_SUCCESS';
export const FETCH_FILM_FAILURE = 'FETCH_FILM_FAILURE';

export const CHANGE_SEARCH_TYPE = 'CHANGE_SEARCH_TYPE';
export const CHANGE_SORT_TYPE = 'CHANGE_SORT_TYPE';

/*
 * action creators
 */

const filmsRequested = () => ({ type: FETCH_FILMS_REQUEST });
const filmsLoaded = newFilms => ({ type: FETCH_FILMS_SUCCESS, payload: newFilms });
const filmsError = error => ({ type: FETCH_FILMS_FAILURE, payload: error });

const filmRequested = () => ({ type: FETCH_FILM_REQUEST });
const filmLoaded = film => ({ type: FETCH_FILM_SUCCESS, payload: film });
const filmError = error => ({ type: FETCH_FILM_FAILURE, payload: error });

const changeTypeSearch = typeSearch => ({ type: CHANGE_SEARCH_TYPE, payload: typeSearch });
const changeTypeSort = typeSort => ({ type: CHANGE_SORT_TYPE, payload: typeSort });


const fetchFilms = (searchFilter, sortFilter, inputValue) => (dispatch) => {
  dispatch(filmsRequested());
  getFilms(searchFilter, sortFilter, inputValue)
    .then(data => data.json())
    .then(res => dispatch(filmsLoaded(res.data)))
    .catch(err => dispatch(filmsError(err)));
};

const fetchFilm = id => (dispatch) => {
  dispatch(filmRequested());
  getFilm(id)
    .then(data => data.json())
    .then(res => dispatch(filmLoaded(res)))
    .catch(err => dispatch(filmError(err)));
};

export {
  fetchFilms,
  fetchFilm,
  changeTypeSearch,
  changeTypeSort,
};
