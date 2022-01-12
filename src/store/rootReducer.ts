import { combineReducers } from 'redux';
import { items } from '../store/items/reducer';
import { search } from '../store/search/reducer';

export const rootReducer = combineReducers({
  items,
  search,
});
