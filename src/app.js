import React from 'react'
import ReactDOM from 'react-dom'
import './styles/styles.scss'
import AppRouter, {history} from './routers/AppRouter'
import configureStore from './store/configureStore'
import getVisibleExpenses from './selectors/expenses'
import {Provider} from 'react-redux'
import './firebase/firebase'
import LoadingPage from './components/LoadingPage'
import { startSetExpenses } from './actions/expenses'
import {firebase} from './firebase/firebase'
import {login, logout} from './actions/auth'

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
ReactDOM.render(<LoadingPage/>, appRoot);

let hasRendered = false;
const renderApp = ()=>{
    if (!hasRendered){
        ReactDOM.render(jsx, appRoot);
        hasRendered = true;
    }
}


firebase.auth().onAuthStateChanged((user)=>{
    if (user){
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(()=>{
            renderApp();
            if (history.location.pathname==='/'){
                history.push('/dashboard')
            }
        })
    }
    else{
        store.dispatch(logout())
        renderApp();
        history.push('/')
    }
})


 


