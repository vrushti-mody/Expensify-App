import ReactDOM from 'react-dom'
import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props)=>{
return(
    <div className = "content-container">
        <div className = "list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div> 
            <div className="show-for-desktop">Amount</div>   
        </div>  
        <div className="list-body">
        {props.expenses.map((expense)=>{
            return <ExpenseListItem key={expense.id} expense={expense}/>
        })}
         {props.expenses.length===0 && 
         <div className= "list-item list-item__message">
         <span>No expenses to show</span>
         </div>}
         </div>
    </div>
   
)}

const mapStateToProps = (state)=>{
    return{
        expenses: selectExpenses(state.expenses, state.filters)
    }
}



export default connect(mapStateToProps)(ExpenseList);;