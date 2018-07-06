import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, Redirect, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import {store, history} from './redux/store'

import PrivateRoute from './components/controls/PrivateRoute'

import Calendar from './containers/calendar/Calendar'
import Login from './containers/login/Login'

import './style.css'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path='/' component={Login} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)
