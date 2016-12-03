import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore, { injectAsyncReducer } from './main/configureStore';
import {Provider} from 'react-redux';
import {Router,browserHistory} from 'react-router';
import createRoutes from './main/routes';


const store=configureStore(); //parameter from server can be passed here

render(
    <Provider store={store} >
    <Router history={browserHistory} routes={createRoutes(store)}/>
    </Provider>,
    document.getElementById('app')
);
