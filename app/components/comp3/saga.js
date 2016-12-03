import * as types from './constants';
import { call, put} from 'redux-saga/effects';
import { takeLatest} from 'redux-saga';
import * as actions from './actions';

let delay = t => new Promise(r => setTimeout(r, t));

function* comp3Load() {
    const API_ENDPOINT = 'http://redsky.target.com/v1/plp/search?alt=json&count=6&response_group=Items%2Csurl&zone=mobile&offset=0&category=5xtd3&sort_by=&category_type=nid';
    try {
        const response = yield call(fetch,API_ENDPOINT);
        const data = yield response.json();
        yield put(actions.comp3Loaded(data.search_response.items));
       // yield delay(6000).then(() => put(actions.comp3Loaded(data.search_response.items)));
    } catch(error) {
        yield put(actions.comp3LoadFailure(error));
    }

}

export default function* watchForcomp3() {

    yield takeLatest(types.LOAD_COMP3, comp3Load);

}/**
 * Created by z002916 on 12/2/16.
 */
