import ReactDOM from 'react-dom'
import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import moment from 'moment'
import numeral from 'numeral'

const ExpenseListItem = (props)=>{
   
    return (
    <div>
        <Link 
        to ={`/edit/${props.expense.id}`}
        className="list-item"
        >
            <div>
            <h3 className="list-item__title">{props.expense.description}</h3>
        <span className="list-item__subtitle">{moment(props.expense.createdAt).format('Do MMMM, YYYY')}</span>
            </div>
       
        <h3 lassName="list-item__data">Rs {numeral(parseFloat((props.expense.amount),10)/100).format('0,0.00')}</h3>
        </Link>
        
       
    </div>
    )
    }

export default ExpenseListItem;