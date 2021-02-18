import ReactDOM from 'react-dom'
import React from 'react'
import ExpenseForm from './ExpenseForm'
import {connect} from 'react-redux'
import { startEditExpense } from '../actions/expenses'
import {startRemoveExpense} from '../actions/expenses'

const EditExpensePage = (props)=>{
    console.log(props)
return(
    <div>
        
        <ExpenseForm 
        expense ={props.expense}
        onSubmit={(expense)=>{
            props.dispatch(startEditExpense(props.expense.id,expense));
            props.history.push('/')
           
        }}
        
        />
         <button onClick={()=>{
        props.dispatch(startRemoveExpense({id:props.expense.id}))
        props.history.push('/')
    }}>Remove</button>
    </div>
)}

const mapStateToProps = (state,props)=>{
    return{
        expense: state.expenses.find((expense)=>{
            return expense.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(EditExpensePage)