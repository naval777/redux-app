import * as types from './constants';
import { call, put} from 'redux-saga/effects';
import { takeLatest} from 'redux-saga';
import * as actions from './actions';

function* comp2Load() {
    const API_ENDPOINT = 'http://redsky.target.com/v1/plp/search?alt=json&count=6&response_group=Items%2Csurl&zone=mobile&offset=0&category=5xtd3&sort_by=&category_type=nid';

    try {
        const response = yield call(fetch,API_ENDPOINT);
        const data = yield response.json();
        yield put(actions.comp2Loaded(data.search_response.items));
    } catch(error) {
        yield put(actions.comp2LoadFailure(error));
    }
}

export default function* watchForcomp2() {

    yield takeLatest(types.LOAD_COMP2, comp2Load);

}/**
 * Created by z002916 on 12/2/16.
 */
