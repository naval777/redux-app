import * as types from '../actions/actionTypes';


export default function plpReducer(state=[],action){
    switch(action.type){
        case types.PLP_LOADED:
           // console.log([...state,Object.assign({},action.plp.search_response.items)]);
            return [...state,Object.assign([],action.plp)];
        default:
            return state;
    }
}
// return [...state,Object.assign({},action.course)];
