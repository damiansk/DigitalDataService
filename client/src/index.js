import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './containers/app/App';

import './index.css';


const history = createHistory();
const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(routerMiddleware(history), reduxThunk)
));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={App} />
    </ConnectedRouter>
  </Provider>
, document.getElementById('root'));
