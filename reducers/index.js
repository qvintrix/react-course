import { combineReducers } from 'redux';
import films from './films';
import filmFilter from './film-filter';
import film from './film';

export default combineReducers({
  film,
  films,
  filmFilter,
});
