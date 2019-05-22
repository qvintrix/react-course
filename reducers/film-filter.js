import {CHANGE_SEARCH_TYPE, CHANGE_SORT_TYPE} from "../actions";

const initialState = {
    sortBy: 'release date',
    searchByFilter: 'title'
};

const filmFilter = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_SEARCH_TYPE:
            return {
                ...state,
                searchByFilter: action.payload
            };

        case CHANGE_SORT_TYPE:
            return {
                ...state,
                sortBy: action.payload
            };

        default:
            return state;
    }
};

export default filmFilter;
