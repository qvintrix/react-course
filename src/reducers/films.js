import {FETCH_FILMS_FAILURE, FETCH_FILMS_REQUEST, FETCH_FILMS_SUCCESS} from "../actions";

const initialState = {
    films: [],
    error: null
};

const films = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_FILMS_REQUEST:
            return {
                films: [],
                error: null
            };

        case FETCH_FILMS_SUCCESS:
            return {
                films: action.payload,
                error: null
            };

        case FETCH_FILMS_FAILURE:
            return {
                films: [],
                error: action.payload
            };

        default:
            return state;
    }
};

export default films;
