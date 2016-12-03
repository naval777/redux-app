/**
 * Created by z002916 on 12/2/16.
 */
import * as types from './constants';


export default function comp3Reducer(state=[],action){
    switch(action.type){
        case types.COMP3_LOADED:
            return [...state,Object.assign([],action.data)];
        default:
            return state;
    }
}