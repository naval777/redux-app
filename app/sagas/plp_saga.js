import * as types from '../actions/actionTypes';
import { call, put} from 'redux-saga/effects';
import { takeLatest} from 'redux-saga';
// import plp_fetch from './plp_fetch';
import * as actions from '../actions/plpActions';
import parse from '../parser/plp_parser';

export function* plpLoad() {
  const API_ENDPOINT = 'http://redsky.target.com/v1/plp/search?alt=json&count=6&response_group=Items%2Csurl&zone=mobile&offset=0&category=5xtd3&sort_by=&category_type=nid';

  try {
    const response = yield call(fetch,API_ENDPOINT);
    const data = yield response.json();
    const plp=parse(data);
    yield put(actions.PlpLoaded(plp));
  } catch(error) {
    yield put(actions.PlpLoadFailure(error));
  }
}

export default function* watchForPlp() {

  yield takeLatest(types.LOAD_PLP, plpLoad);

}