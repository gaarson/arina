import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom'; 
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';

import sagas from './side-effects/sagas.js';
import * as reducers from './reducers/reducer.js';

import Home from './components/home/home.js';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(combineReducers(reducers), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

render(
  <Provider store={store}>
    <Router>
      <div>
        <Router exact path='/' component={Home} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)

