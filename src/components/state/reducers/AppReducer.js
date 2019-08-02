import { combineReducers } from 'redux';

import { FetchZipCodesReducer } from '../reducers/FetchZipCodesReducer';

export const AppReducer = combineReducers({
  zipCodes: FetchZipCodesReducer
});