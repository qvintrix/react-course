import {FETCH_FILM_FAILURE, FETCH_FILM_REQUEST, FETCH_FILM_SUCCESS} from "../actions";

const initialState = {
    film: {},
    error: null
};

const film = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_FILM_REQUEST:
            return {
                film: {},
                error: null
            };

        case FETCH_FILM_SUCCESS:
            return {
                film: { ...action.payload },
                error: null
            };

        case FETCH_FILM_FAILURE:
            return {
                film: {},
                error: action.payload
            };

        default:
            return state;
    }
};

export default film;
