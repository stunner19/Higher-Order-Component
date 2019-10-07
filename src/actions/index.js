import * as ActionTypes from './types';

export const authenticate = (isLoggedIn) => ({
    type : ActionTypes.CHANGE_AUHH,
    payload : isLoggedIn
});