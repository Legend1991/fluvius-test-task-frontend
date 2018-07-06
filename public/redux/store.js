import {createStore, applyMiddleware, compose} from 'redux';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';
import asyncMiddleware from 'redux-async';
import createHistory from 'history/createBrowserHistory';

import reducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(compose(asyncMiddleware, routerMiddleware))(
  window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore
);

export const store = createStoreWithMiddleware(reducer);
export const history = syncHistoryWithStore(createHistory(), store);