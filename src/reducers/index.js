import { combineReducers } from 'redux';
import AuthenticationReducer from './authenticate';

const rootReducer = combineReducers({
  authenticated : AuthenticationReducer
});

export default rootReducer;
