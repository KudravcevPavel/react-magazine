import { combineReducers } from 'redux';
import filters from './filter';
import mebel from './mebel';
import cart from './cart';

const rootReducer = combineReducers({
  filters,
  mebel,
  cart,
});

export default rootReducer;
