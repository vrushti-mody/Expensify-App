import { v4 as uuidv4 } from 'uuid'
import {firebase} from '../firebase/firebase'
import database from '../firebase/firebase'
//ADD_EXPENSE
export const addExpense = (expense) => ({
    type:'ADD_EXPENSE',
    expense
})

//REMOVE_EXPENSE
export const removeExpense = ({id}={})=>({
    type:'REMOVE_EXPENSE',
    id
})

export const startAddExpense =(expenseData={})=>{
    return (dispatch)=>{
        const {
            description='',
            note='', 
            amount=0, 
            createdAt = 0
        } =expenseData
    const expense = {description, note, amount, createdAt};
    database.ref('expenses').push(expense).then((ref)=>{
        dispatch(addExpense({
            id: ref.key,
            ...expense
        }))
    })
    }
}

//EDIT EXPENSE
export const editExpense = (id, updates)=>({
    type:'EDIT_EXPENSE',
    id,
    updates
})