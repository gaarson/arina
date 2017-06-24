import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom'; 
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';

import sagas from './side-effects/sagas.js';
import * as reducers from './reducers/reducer.js';

import Home from './components/home/home.js';
import Galery from './components/galery/galery.js';
import Admin from './components/admin/admin.js';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(combineReducers(reducers), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/galery' component={Galery} />
        <Route path='/admin' component={Admin} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)

