import ReactDOM from 'react-dom'
import React from 'react'
import { NavLink} from 'react-router-dom'

const Header = ()=>(
    <div>
        <h1>Expensify App</h1>
        <NavLink to='/' activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to='/create'activeClassName="is-active">Create Expense</NavLink>
        <NavLink to='/help'activeClassName="is-active">Help</NavLink>
    </div>
)

export default Header;