import * as types from './constants';

export function loadComp2(){
    return{type:types.LOAD_COMP2};
}

export function comp2Loaded(data){
//parsing
    return{type:types.COMP2_LOADED,data};
}
export function comp2LoadFailure(error){
    return{type:types.COMP2_LOAD_FAILURE,error};
}