import {combineReducers} from 'redux';
import comp1 from '../components/comp1/reducer';
import comp2 from '../components/comp2/reducer';
// import comp3 from '../components/comp3/reducer';

export default function createReducer(asyncReducers){
    return combineReducers({
        comp1,
        comp2,
        ...asyncReducers
    });
}

