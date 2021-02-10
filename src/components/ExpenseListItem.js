import ReactDOM from 'react-dom'
import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'


const ExpenseListItem = (props)=>{
   
    return (
    <div>
        <Link to ={`/edit/${props.expense.id}`}>
        <h3>{props.expense.description}</h3>
        </Link>
        <p>{parseFloat((props.expense.amount),10)/100}</p>
        <p>{props.expense.createdAt}</p>
       
    </div>
    )
    }

export default ExpenseListItem;