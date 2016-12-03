import * as types from './constants';
import { call, put} from 'redux-saga/effects';
import { takeLatest} from 'redux-saga';
import * as actions from './actions';

function* comp1Load() {
    const API_ENDPOINT = 'http://redsky.target.com/v1/plp/search?alt=json&count=6&response_group=Items%2Csurl&zone=mobile&offset=0&category=5xtd3&sort_by=&category_type=nid';

    try {
        const response = yield call(fetch,API_ENDPOINT);
        const data = yield response.json();
        yield put(actions.comp1Loaded(data.search_response.items));
    } catch(error) {
        yield put(actions.comp1LoadFailure(error));
    }
}

export default function* watchForcomp1() {

    yield takeLatest(types.LOAD_COMP1, comp1Load);

}/**
 * Created by z002916 on 12/2/16.
 */
