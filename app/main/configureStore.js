import { createStore, applyMiddleware, compose} from 'redux';
import createReducer from './reducers';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    let store= createStore(
        createReducer(),
        initialState,
        compose(applyMiddleware(sagaMiddleware))
    );
    store.asyncReducers={};
    sagaMiddleware.run(rootSaga);
    return store;
}

export function injectAsyncReducer(store, name, asyncReducer) {
    console.log("I am here");
    store.asyncReducers[name] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
}
