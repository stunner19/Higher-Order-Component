import * as ActionTypes from '../actions/types';

export default function(state = false, action) {
    switch(action.type){
        case ActionTypes.CHANGE_AUHH : 
            return action.payload;
        default : 
            return state;
    }
}