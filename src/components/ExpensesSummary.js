import ReactDOM from 'react-dom'
import React from 'react'
import {connect} from 'react-redux'
import numeral from 'numeral'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/total'
import {Link} from 'react-router-dom'

const ExpensesSummary = ({expenseCount, expensesTotal})=>{
    const expenseWord = expenseCount ===1? 'expense': 'expenses'
    const formattedExpenseTotal = numeral(expensesTotal).format('Rs 0,0.00')
return(
    <div className= "page-header"> 
    <div className="content-container">
       <h1 className = 'page-header__title'> Viewing <span>{expenseCount} </span>{expenseWord} totalling <span>Rs {formattedExpenseTotal}</span></h1>
       <div className="page-header__actions">
           <Link className="button" to="/create">Add Expense</Link>
       </div>
       </div>
    </div>
   
)}

const mapStateToProps = (state)=>{
    const expenses= selectExpenses(state.expenses, state.filters)
    return{
        expenseCount: expenses.length,
        expensesTotal: getExpensesTotal(expenses)
    }
}



export default connect(mapStateToProps)(ExpensesSummary);;