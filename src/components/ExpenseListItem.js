import ReactDOM from 'react-dom'
import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import moment from 'moment'
import numeral from 'numeral'

const ExpenseListItem = (props)=>{
   
    return (
    <div>
        <Link to ={`/edit/${props.expense.id}`}>
        <h3>{props.expense.description}</h3>
        </Link>
        <p>Rs {numeral(parseFloat((props.expense.amount),10)/100).format('0,0.00')}</p>
        <p>{moment(props.expense.createdAt).format('Do MMMM, YYYY')}</p>
       
    </div>
    )
    }

export default ExpenseListItem;