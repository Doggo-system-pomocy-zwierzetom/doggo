import { combineReducers } from "redux";
import adoptions from './adoptions.js';
import auth from './auth.js';

export default combineReducers({ adoptions, auth })