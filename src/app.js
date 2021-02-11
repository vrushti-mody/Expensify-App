import React from 'react'
import ReactDOM from 'react-dom'
import './styles/styles.scss'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import {Provider} from 'react-redux'

const store = configureStore()
store.dispatch(addExpense({description:'Water Bill'}))
store.dispatch(addExpense({description:'Rent', createdAt:1000,amount:100}))
store.dispatch(addExpense({description:'Gas Bill', createdAt:-1000,amount:500}))
store.dispatch(setTextFilter('water'))
const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

var appRoot = document.getElementById("app");
ReactDOM.render(jsx, appRoot);


 


