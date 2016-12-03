import * as types from './actionTypes';

export function loadPlp(){
    return{type:types.LOAD_PLP};
}

export function PlpLoaded(plp){
//parsing
    return{type:types.PLP_LOADED,plp};
}
export function PlpLoadFailure(error){
    return{type:types.PLP_LOAD_FAILURE,error};
}