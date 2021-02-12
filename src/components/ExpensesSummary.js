import ReactDOM from 'react-dom'
import React from 'react'
import {connect} from 'react-redux'
import numeral from 'numeral'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/total'

const ExpensesSummary = ({expenseCount, expensesTotal})=>{
    const expenseWord = expenseCount ===1? 'expense': 'expenses'
    const formattedExpenseTotal = numeral(expensesTotal).format('Rs 0,0.00')
return(
    <div>
       <h1>Viewing {expenseCount} {expenseWord} totalling Rs {formattedExpenseTotal}</h1>
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