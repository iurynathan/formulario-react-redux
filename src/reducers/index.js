import { combineReducers } from 'redux';

import formsReducer from './formsReducer';

export default combineReducers({
  forms: formsReducer,
});
