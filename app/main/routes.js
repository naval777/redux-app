import React from 'react';
import {Route,IndexRoute} from 'react-router';
import { injectAsyncReducer } from './configureStore';
import App from '../containers/App';
import HomePage from '../containers/HomePage';

import comp3_reducer from '../components/comp3/reducer';



const createRoutes=(store) => {
    // setTimeout(function() {
    //     injectAsyncReducer(store, 'comp3', comp3_reducer);
    // }, 5000);
    injectAsyncReducer(store, 'comp3', comp3_reducer);
    return (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        {/*<Route path="plp" component={PlpPage}/>*/}
        {/*<Route path="pdp" component={PdpPage}/>*/}
    </Route>

);


};
export default createRoutes;






//
// export const createRoutes =(store) => {
//     return (
//         <Route path="/" component={App}>
//             <IndexRoute component={HomePage}/>
//
//         </Route>
//     )
// }

//
// <Route path="plp" getComponent={(location, callback) => {
//     require.ensure([
//         '../views/plp/components/PlpPage',
//         '../views/plp/reducers',
//         '../views/plp/containers',
//         '../views/plp/actions',
//     ], function (require) {
//         let Plp = require('../views/plp/components').default;
//         let plpReducer = require('../views/plp/reducers').default;
//
//         injectAsyncReducer(store, 'plp', plpReducer);
//         callback(null, Plp);
//     }, "plp");
// }}/>