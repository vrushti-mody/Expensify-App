import React from 'react'
import ReactDOM from 'react-dom'
import './styles/styles.scss'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import getVisibleExpenses from './selectors/expenses'
import {Provider} from 'react-redux'
import './firebase/firebase'

const store = configureStore()
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


 


