import { fork } from 'redux-saga/effects';
import comp1 from '../components/comp1/saga';
import comp2 from '../components/comp2/saga';
import comp3 from '../components/comp3/saga';

// import plp from '../sagas/plp_saga';
// import users from './users';
// import posts from './posts';

export default function* rootSaga() {
    yield fork(comp1);
    yield fork(comp2);
    yield fork(comp3);

    // yield fork(users);
    // yield fork(posts);
}
