import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import rootReducer from './redux/redusers';
import { combineReducers, legacy_createStore as createStore} from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Status from './Status';

let redusers = combineReducers({
  num:rootReducer,
})

let store = createStore(redusers);


    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <BrowserRouter>
         <Provider store = {store}>
                    <App/>
            <Routes>
              <Route path='/status' element = { <Status/>}/>
            </Routes>
          </Provider>      
        </BrowserRouter>      
      </React.StrictMode>
    );

window.store = store;


