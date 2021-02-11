import ReactDOM from 'react-dom'
import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props)=>{
return(
    <div>
        <h1>Expense List </h1>
        {props.expenses.map((expense)=>{
            return <ExpenseListItem key={expense.id} expense={expense}/>
        })}
         {props.expenses.length===0 && <p>No expenses to show</p>}
    </div>
   
)}

const mapStateToProps = (state)=>{
    return{
        expenses: selectExpenses(state.expenses, state.filters)
    }
}



export default connect(mapStateToProps)(ExpenseList);;