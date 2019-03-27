import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserProvider from './providers/UserProvider'
import 'bootstrap/dist/css/bootstrap.css';
import 'semantic-ui-css/semantic.min.css';
import { AuthProvider, } from "./providers/AuthProvider";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, } from "react-router-dom";
import { initMiddleware, } from 'devise-axios';

initMiddleware()

ReactDOM.render(
  <AuthProvider>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </AuthProvider>, 
  document.getElementById('root')
);
serviceWorker.unregister();
