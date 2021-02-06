import { combineReducers } from 'redux';
import filtersReducer from './filter';
import mebelReducer from './mebel';

const rootReducer = combineReducers({
  filters: filtersReducer,
  mebel: mebelReducer,
});

export default rootReducer;
