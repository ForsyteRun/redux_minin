import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import rootReducer from './redux/redusers';
import { legacy_createStore as createStore} from 'redux';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, 0);


    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <Provider store = {store}>
          <App />   
        </Provider>
      </React.StrictMode>
    );



