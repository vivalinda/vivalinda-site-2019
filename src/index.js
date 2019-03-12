import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import AppWithForm from './AppWithForm'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <BrowserRouter>
      <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/parcerias" component={AppWithForm} />
        </Switch>
  </ BrowserRouter>
  , document.getElementById('root'));

serviceWorker.register();

// Implement Later
//<Route path='*' component={Page404} />
