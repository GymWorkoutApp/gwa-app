import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createReactNavigationReduxMiddleware} from "react-navigation-redux-helpers";
import {consumeActionMiddleware, offlineMiddleware, suspendSaga} from 'redux-offline-queue';
import 'reactotron-redux-saga';

export default function (rootReducer, rootSaga) {
  const middlewares = [];

  middlewares.push(offlineMiddleware());
  /* Saga */
  const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor : null;
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  middlewares.push(suspendSaga(sagaMiddleware));
  middlewares.push(consumeActionMiddleware());

  const middlewareNavigation = createReactNavigationReduxMiddleware(
      "root",
      state => state.nav,
  );

  middlewares.push(middlewareNavigation);

  /* Store */
  const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;

  const store = createAppropriateStore(rootReducer, applyMiddleware(...middlewares));

  /* Run Saga */
  sagaMiddleware.run(rootSaga);

  return store;
};
