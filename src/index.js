import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import rootReducer from './redux/redusers';
import { combineReducers, legacy_createStore as createStore} from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom';
import statusReduser from './redux/statusReduser';

let redusers = combineReducers({
  num:rootReducer,
  usersPage: statusReduser,
})

let store = createStore(redusers);


    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <BrowserRouter>
         <Provider store = {store}>
              <App/> 
          </Provider>      
        </BrowserRouter>      
      </React.StrictMode>
    );

window.store = store;


