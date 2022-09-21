import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom';
import statusReduser from './redux/statusReduser';
import profileReduser from './redux/profileReduser';
import authReduser from './redux/authReduser';
import { configureStore } from '@reduxjs/toolkit';
import initialReducer from './redux/initialReducer';

let store = configureStore({
  reducer:{
    usersPage: statusReduser,
    profile:profileReduser,
    auth: authReduser,
    init: initialReducer,
  }
})

// setInterval(() => {
//   store.dispatch({type: 'fake'})
// }, 3000);  

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
