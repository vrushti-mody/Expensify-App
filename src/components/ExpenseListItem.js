import ReactDOM from 'react-dom'
import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {removeExpense} from '../actions/expenses'

const ExpenseListItem = (props)=>{
    const onSubmit= ()=>{
        return props.dispatch(removeExpense({id:props.expense.id}))
    }
    return (
    <div>
        <Link to ={`/edit/${props.expense.id}`}>
        <h3>{props.expense.description}</h3>
        </Link>
        <p>{props.expense.amount}</p>
        <p>{props.expense.createdAt}</p>
        <button onClick={onSubmit}>Remove</button>
    </div>
    )
    }

export default connect()(ExpenseListItem);