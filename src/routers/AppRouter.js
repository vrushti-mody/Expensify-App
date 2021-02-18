import {Router, Route, Switch, Link, NavLink} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import ReactDOM from 'react-dom'
import React from 'react'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import NotFoundPage from '../components/NotFoundPage'
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory()
const AppRouter =() =>(
    <div>
    <Router history = {history}>
    <Switch>
    <PublicRoute component={LoginPage} exact={true} path="/"/>
    <PrivateRoute component={ExpenseDashboardPage} path="/dashboard"/>
    <PrivateRoute component={AddExpensePage} path="/create" />
    <PrivateRoute component={EditExpensePage} path="/edit/:id"  />
  
    <Route component={NotFoundPage}  />
    </Switch>
    </Router >
    </div>
)

export default AppRouter;
