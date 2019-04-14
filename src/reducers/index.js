import {combineReducers} from 'redux';
import films from './films';
import filmFilter from './film-filter';

// const reducer = (state = initialState, action) => {
//     return {
//         films: updateFilmsList(state, action),
//         filmSearch: updateSearchedList(state, action)
//     };
// };

export default combineReducers({
    films,
    filmFilter
})

