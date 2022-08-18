import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import rootReducer from './redux/redusers';
import { combineReducers, legacy_createStore as createStore} from 'redux';
import { Provider } from 'react-redux';

let redusers = combineReducers({
  rootReducer,
})

let store = createStore(redusers);


    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <Provider store = {store}>
          <App/>
        </Provider>       
      </React.StrictMode>
    );

window.store = store;

