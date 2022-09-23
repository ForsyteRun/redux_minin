import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import statusReduser from './redux/statusReduser';
import profileReduser from './redux/profileReduser';
import authReduser from './redux/authReduser';
import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux';
import initialReducer from './redux/initialReducer';
import thunk from 'redux-thunk'

let redusers = combineReducers({
  usersPage: statusReduser,
  profile: profileReduser,
  auth: authReduser,
  init: initialReducer,
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

const store = createStore(redusers, enhancer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

window.__store__ = store;
