import {SELECT} from './actions'
export const initialState = [false, false, false];

export const selectReducer = function(state=initialState, action) {
    console.log('state in reducer: ',  state);
    console.log('action in reducer: ', action);
    switch (action.type) {
        case SELECT:       
            return [...state.slice(0, action.id), !state[action.id], ...state.slice(action.id+1)];
        default: 
            return state;
    }
}

/*export const availableReducer = function(state=[false, false, false], action) {
    switch (action.type){
        case AVAILABLE:
            return 
        default:
            throw new Error('Unexpected action')
    }
        
}*/