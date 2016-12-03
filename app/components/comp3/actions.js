import * as types from './constants';

export function loadComp3(){
    return{type:types.LOAD_COMP3};
}

export function comp3Loaded(data){
//parsing
    return{type:types.COMP3_LOADED,data};
}
export function comp3LoadFailure(error){
    return{type:types.COMP3_LOAD_FAILURE,error};
}