import * as types from './constants';

export function loadComp1(){
    return{type:types.LOAD_COMP1};
}

export function comp1Loaded(data){
//parsing
    return{type:types.COMP1_LOADED,data};
}
export function comp1LoadFailure(error){
    return{type:types.COMP1_LOAD_FAILURE,error};
}