import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import ReactDOM from 'react-dom'
import React from 'react'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import Header from '../components/Header'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter =() =>(
    <div>
    <BrowserRouter>
    <Route component={Header}/>
    <Switch>
    <Route component={ExpenseDashboardPage} exact={true} path="/"/>
    <Route component={AddExpensePage} path="/create" />
    <Route component={EditExpensePage} path="/edit/:id"  />
    <Route component={HelpPage} path="/help" />
    <Route component={NotFoundPage}  />
    </Switch>
    </BrowserRouter>
    </div>
)

export default AppRouter;
