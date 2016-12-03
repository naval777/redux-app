/**
 * Created by z002916 on 11/29/16.
 */
require('es6-promise').polyfill();
require('isomorphic-fetch');
import { put} from 'redux-saga/effects';

export default function plpFetch() {
    const API_ENDPOINT = 'http://redsky.target.com/v1/plp/search?alt=json&count=6&response_group=Items%2Csurl&zone=mobile&offset=0&category=5xtd3&sort_by=&category_type=nid';



    fetch(API_ENDPOINT).then(function(response) {

        if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
        const res = yield response.json()
        return res;
        }).then(function(search_response) {
        put({ type: 'PLP_LOADED', search_response });
        console.log(search_response);
        });
};


