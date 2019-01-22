/* Reducers */

import configureStore from './configureStore';
import rootSaga from './sagas';
import rootReducers from './ducks';

export default () => configureStore(rootReducers, rootSaga)
