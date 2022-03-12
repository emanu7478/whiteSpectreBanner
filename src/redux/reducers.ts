import { combineReducers } from 'redux';
// REDUCERS
import bannerReducer from './banners/reducers';

const Reducer = combineReducers({
  bannerReducer,
});
export const rootReducer = Reducer;
